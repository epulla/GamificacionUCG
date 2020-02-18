plantilla = "plantilla.html"


def get_plantilla(plantilla):
    html = open(plantilla,"r",encoding="utf8")
    plantilla_content = html.readlines()
    html.close()
    return plantilla_content

def get_indices(content,elem):
    for i in range(len(content)):
        line = content[i]
        if line.find(elem) >= 0:
            return i + 1 

def insert_content_qa(content, elems, index, id):
    content.insert(index,'\t'*3 + '</ul>\n')
    i = 0
    for i in range(len(elems)):
        content.insert(index,'\t'*4 + '<li>'+elems[i].replace("\n","")+'</li>\n')
    content.insert(index,'\t'*3 + '<ul style="list-style-type:none;" id="'+id+'">\n')
    content = "".join(content)

def insert_content_table(content, elems, index):
    header = ["Pregunta", "Respuesta"]
    content.insert(index,'\t'*2 + '</table>\n')
    for i in range(len(elems) + 1):
        content.insert(index,'\t'*3 + '</tr>\n')
        if len(elems) - i == 0:
            content.insert(index,'\t'*4 + '<th>Respuesta</th>\n')
            content.insert(index,'\t'*4 + '<th>Pregunta</th>\n')
        else:
            content.insert(index,'\t'*4 + '<td><input type="text" id=a'+str(len(elems) - i)+'></td>\n')
            content.insert(index,'\t'*4 + '<td id="q' + str(len(elems) - i) + '">'+ str(len(elems) - i) +'</td>\n')
        content.insert(index,'\t'*3 + '<tr>\n')
    content.insert(index,'\t'*2 + '<table style="width:50%">\n')

def get_joined_content(content,preguntas,respuestas):
    indice_preguntas = get_indices(content,"preguntas")
    insert_content_qa(content,preguntas,indice_preguntas,"preguntas_data")
    indice_respuestas = get_indices(content,"respuestas")
    insert_content_qa(content,respuestas,indice_respuestas,"respuestas_data")
    indice_tabla = get_indices(content,"id_tabla")
    insert_content_table(content,preguntas,indice_tabla)
    content.insert(len(content)-2,"\t<p1 class=\"easter_egg\" id=\"easter_egg\">"+preguntas_respuestas_str+"</p1>\n")
    return "".join(content)

def get_preguntas_respuestas(datos):
    preguntas = []
    respuestas = []
    global preguntas_respuestas_str
    preguntas_respuestas_str = ""
    i = 0
    for line in datos:
        preguntas.append(str(i+1) + ". " + line.split(",")[0])
        respuestas.append(". " + line.split(",")[1])
        i += 1
    respuestas_label = [string.ascii_lowercase[j] for j in range(i)]
    random.shuffle(respuestas_label)
    for ir in range(len(respuestas)):
        respuestas[ir] = respuestas_label[ir] + respuestas[ir]
        preguntas_respuestas_str += str(ir+1) + respuestas_label[ir]
        if ir != len(respuestas)-1:
             preguntas_respuestas_str += ","
    return preguntas[::-1], respuestas

def write_datos(datos,html):
    content = get_plantilla(plantilla)
    preguntas, respuestas = get_preguntas_respuestas(datos)
    html.write(get_joined_content(content,preguntas, respuestas))

import os
import string
import random


datos = open("data.txt", "r",encoding="utf8")
html = open("index.html","w",encoding="utf8")

dicc_respuestas = {}

easter_egg = ""

write_datos(datos,html)

print(preguntas_respuestas_str)

datos.close()
html.close()






