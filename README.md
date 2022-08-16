# Proyecto JavaScript Avanzado

[Ver este proyecto](https://sato31.github.io/Proyecto-JAvanzado-Dev.f/)

Este proyecto consistió en hacer un catálogo de personajes de la serie Rick and Morty. Cada personaje cuenta con su tarjeta que muestra la información obtenida desde [esta](https://rickandmortyapi.com/) API externa.

![1660624251627](image/README/1660624251627.png)

La información que se muestra en cada tarjeta es:

* Imagen del personaje
* Nombre
* Estado (Live, Dead o Unknown)
* Especie
* Tipo
* Género
* Origen
* Enlace para ver información del último episodio
* ID

![1660624279002](image/README/1660624279002.png)

Si el personaje no cuenta con imagen, aparece de esta forma:

![1660624319573](image/README/1660624319573.png)

Al final de la página se muestra la paginación para desplazarse a las demás paginas de personajes, a la primera, a la siguiente, a la anterior y a la última.

![1660624405533](image/README/1660624405533.png)

Al darle click en la opción "Watch last episode" se despliega un modal con la información del último episodio donde aparecio el personaje:

La información mostrada es:

* Nombre del episodio
* Número de episodio y temporada
* Fecha de emisión
* Imagen y nombre de personajes que aparecen en ese episodio

![1660624444645](image/README/1660624444645.png)

Para cerrar el modal se selecciona la cruz en la parte superior derecha.

La página incluye 2 filtros de búsqueda:

* Por nombre
* Por estado

![1660624515916](image/README/1660624515916.png)

Al ir escribiendo en el input de búsqueda, la lista de personajes se actualiza automaticamente, si se borra lo escrito en el input, se muestran los personajes correspondientes a la página en la que se encuentren.

![1660624548526](image/README/1660624548526.png)

El selector de estado filtra los personajes de acuerdo a los tres estados existentes.

![1660624619516](image/README/1660624619516.png)
