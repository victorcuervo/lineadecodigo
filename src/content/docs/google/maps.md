---
title: "Maps"
description: "Descubre cómo funcionan las APIs Google Maps para crear mapas, geocodificar direcciones, buscar lugares y calcular rutas, con un ejemplo práctico."
date: 2026-09-24
updatedDate: 2026-09-24
tags: ["api","google maps","route","marker","geolocation"]
slug: google/maps
type: category
topic: google
id: 3e5a9dfb-adca-8087-b7af-e45fb7cfa21e
author: victor_cuervo
---

## ¿Qué son las APIs Google Maps?


Las **APIs Google Maps** son servicios de Google Maps Platform que permiten incorporar mapas, datos geográficos y funciones de localización en aplicaciones web, móviles y de servidor. Proporcionan interfaces definidas para representar mapas, convertir direcciones en coordenadas, buscar lugares, calcular rutas o mostrar imágenes de Street View.


Google Maps Platform no es una única API. Es un conjunto de APIs y SDK organizados alrededor de tres ámbitos principales:

- **Mapas:** permiten mostrar cartografía interactiva o generar imágenes estáticas de un mapa.
- **Rutas:** calculan recorridos, distancias y tiempos estimados entre ubicaciones.
- **Lugares:** ofrecen búsquedas y datos de establecimientos, direcciones y puntos de interés.

Una aplicación accede a estos servicios mediante una biblioteca cliente, un SDK o una petición HTTP a un endpoint. Un _endpoint_ es la URL que recibe la operación solicitada. Las APIs web suelen devolver información en JSON, un formato de texto estructurado que puede procesarse desde distintos lenguajes.


Para utilizar los servicios se necesita un proyecto de Google Cloud, una cuenta de facturación asociada, la API correspondiente habilitada y credenciales. La credencial habitual es una clave de API, que identifica el proyecto al que se asignan el consumo y las cuotas. La clave no identifica por sí sola a un usuario ni concede acceso a su ubicación.


## Características de las APIs Google Maps

- **Servicios especializados.** Maps JavaScript API y los SDK para Android e iOS muestran mapas interactivos. Maps Static API genera una imagen. Geocoding API convierte direcciones en coordenadas y también realiza el proceso inverso. Places API busca lugares y recupera sus detalles. Routes API calcula trayectos y matrices de rutas.
- **Modelo basado en coordenadas.** Una ubicación se representa normalmente mediante latitud y longitud. La latitud indica la posición norte-sur y la longitud, la posición este-oeste.
- **Marcadores y capas de información.** Los mapas interactivos pueden señalar ubicaciones mediante marcadores y añadir ventanas informativas, formas, líneas o capas de datos. Estas opciones dependen de la API o del SDK elegido.
- **Geocodificación diferente de geolocalización.** La geocodificación obtiene coordenadas a partir de una dirección. La geolocalización intenta determinar la posición de un dispositivo mediante señales disponibles y, en aplicaciones web, requiere permiso del usuario. Son operaciones relacionadas, pero no equivalentes.
- **Cálculo de rutas configurable.** Las APIs de rutas pueden considerar origen, destino, puntos intermedios y modo de transporte. La disponibilidad de opciones y datos depende del servicio, la región y la operación utilizada.
- **Respuestas estructuradas y estados.** Los servicios web devuelven resultados y datos de estado. La aplicación debe comprobar si la petición ha sido válida antes de utilizar coordenadas, rutas o lugares.
- **Cuotas y facturación.** Las solicitudes se contabilizan en el proyecto de Google Cloud. Cada servicio tiene sus propias unidades facturables, cuotas y límites, por lo que conviene solicitar solo los datos necesarios y controlar el consumo.
- **Restricción de credenciales.** Una clave debe limitarse a las APIs necesarias y al contexto desde el que se utiliza, como dominios web, aplicaciones móviles o direcciones IP de servidor. Esto reduce el riesgo de uso no autorizado.

## ¿Por qué aprender las APIs Google Maps?


Conocer estas APIs permite resolver necesidades geográficas sin mantener cartografía, buscadores de direcciones ni motores de cálculo de rutas propios. Resultan útiles en localizadores de tiendas, sistemas de reparto, aplicaciones de transporte, planificación de visitas, seguimiento de activos y formularios que necesitan validar direcciones.


Su aprendizaje también obliga a distinguir varios problemas que suelen confundirse:

- Mostrar un mapa no implica conocer la posición del usuario.
- Obtener la ubicación del dispositivo no proporciona automáticamente una dirección postal.
- Buscar un lugar no es lo mismo que convertir una dirección concreta en coordenadas.
- Dibujar una línea entre dos puntos no equivale a calcular una ruta transitable.

Elegir el servicio adecuado evita peticiones innecesarias y resultados incorrectos. Por ejemplo, Geocoding API es apropiada para transformar una dirección conocida en coordenadas; Places API resulta más adecuada cuando el usuario busca por nombre, categoría o texto; Routes API se utiliza cuando se necesita un trayecto calculado.


También es necesario aprender a proteger claves, interpretar respuestas JSON, gestionar errores y respetar cuotas. Estas prácticas son aplicables a otras APIs Google, pero en Google Maps tienen un impacto directo en costes, seguridad y calidad de los datos mostrados.


## Ejemplo de APIs Google Maps


El siguiente código utiliza Maps JavaScript API para crear un mapa y añadir un marcador avanzado en la ciudad de Ávila. La página debe haber cargado previamente Maps JavaScript API y contener un elemento con el identificador `map` y una altura definida.


```javascript
async function iniciarMapa() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const avila = {
    lat: 40.65648,
    lng: -4.68175
  };

  const mapa = new Map(document.getElementById("map"), {
    center: avila,
    zoom: 16,
    mapId: "DEMO_MAP_ID"
  });

  new AdvancedMarkerElement({
    map: mapa,
    position: avila,
    title: "Ávila"
  });
}

iniciarMapa();
```


Mediante el método `importLibrary("maps")` carga la clase `Map`, mientras que `importLibrary("marker")` carga `AdvancedMarkerElement`, la clase recomendada para crear marcadores. El objeto `avila` define la posición mediante latitud y longitud. Esa misma posición se utiliza para centrar el mapa y colocar la marca.


`DEMO_MAP_ID` permite probar el ejemplo. En una aplicación publicada debe sustituirse por un identificador de mapa configurado en Google Cloud. La clave utilizada para cargar Maps JavaScript API debe restringirse al dominio de la aplicación y solo a las APIs necesarias.


La clave del ejemplo de geocodificación debe permanecer fuera del código publicado y restringirse a Geocoding API y a la dirección IP del servidor que realiza la petición. Si la llamada se ejecuta desde otro entorno, hay que aplicar el tipo de restricción compatible con ese cliente.

