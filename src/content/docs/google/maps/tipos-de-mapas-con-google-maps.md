---
title: "Tipos de mapas con Google Maps"
description: "Aprende a cambiar el tipo de visualización en Google Maps entre mapa callejero, satélite e híbrido usando el método setMapType de GMap2."
date: 2009-01-13
updatedDate: 2026-02-07
tags: ["gmap2","setmaptype","glatlng"]
slug: google/maps/tipos-de-mapas-con-google-maps
type: doc
topic: google
id: c10122eb-36e8-4667-9b41-9242f7487aa3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/cambiar-tipo-mapa.html
---

Cuando [cargamos un mapa con Google Maps](http://lineadecodigo.com/2007/04/06/cargando-google-maps/), este, por defecto, se carga en su vista de mapa predeterminada. Esta vista es la del formato callejero. Puede suceder que queramos cambiar el tipo de mapa que estamos mostrando.


## Tipos de mapas disponibles


Los tipos de mapas que nos ofrece [Google Maps](http://www.manualweb.net/google-maps/) son:

- **Mapa Callejero** - G_NORMAL_MAP
- **Mapa Satélite** - G_SATELLITE_MAP
- **Mapa Híbrido** - G_HYBRID_MAP
- **Mapa mezcla de los tres anteriores** - G_DEFAULT_MAP_TYPES

## Cambiar el tipo de mapa con setMapType


Nos apoyaremos en el método setMapType de la clase GMap2 para cambiar la visualización del mapa. Así, si queremos poner el mapa en formato satélite tendremos las siguientes líneas:


```javascript
var map = new GMap2(document.getElementById("mapa"));
map.setCenter(new GLatLng(40.655997,-4.700518), 15);
map.setMapType(G_SATELLITE_MAP);
```

