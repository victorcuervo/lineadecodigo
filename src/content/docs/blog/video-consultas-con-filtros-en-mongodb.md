---
title: "Vídeo Consultas con Filtros en MongoDB"
description: "Descubre cómo realizar consultas con filtros en MongoDB y optimiza tus búsquedas. Aprende a utilizar el método find y mejora tu manejo de datos."
date: 2015-09-21
updatedDate: 2026-01-28
tags: ["video"]
slug: blog/video-consultas-con-filtros-en-mongodb
author: victor_cuervo
type: doc

topic: blog



---

En este nuevo vídeo de Línea de código podemos ver cómo realizar consultas con filtros en [MongoDB](https://www.manualweb.net/mongodb/).


## Conjunto de datos


En el vídeo consultas con filtros en [MongoDB](https://www.manualweb.net/mongodb/) partiremos de un conjunto de documentos de ciudades:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5b"),
	"ciudad" : "Madrid",
	"habitantes" : 3233527
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5c"),
	"ciudad" : "Barcelona",
	"habitantes" : 1620943
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5d"),
	"ciudad" : "Valencia",
	"habitantes" : 797028
}
```


## Método find() con filtros


Y veremos cómo utilizar el método `find()` con un filtro:


```javascript
db.ciudades.find( {ciudad:"Madrid"} );
```


Para poder obtener un documento de la colección.


## Vídeo tutorial


Pero lo mejor es que veas el vídeo consultas con filtros en [MongoDB](https://www.manualweb.net/mongodb/) y nos cuentes qué te parece.



<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/jMxAMRRI0Ww"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>


