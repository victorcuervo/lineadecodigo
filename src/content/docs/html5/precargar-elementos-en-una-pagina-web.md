---
title: "Precargar elementos en una página web"
description: "Precargar elementos en una página web con prefetch, preload y preconnect: aprende cuándo usar cada técnica sin desperdiciar datos ni ancho de banda."
date: 2010-12-21
updatedDate: 2026-09-29
tags: ["link","rendimiento","http","url","html5","api"]
slug: html5/precargar-elementos-en-una-pagina-web
type: doc
topic: html5
id: 95d78838-513d-4456-8ed8-ff8c0869a736
author: victor_cuervo
download: http://code.google.com/p/lineadecodigo/source/browse/trunk/lineadecodigo_web/WebContent/markup/HTML5/Optimizacion
---

Precargar elementos en una página web puede mejorar el rendimiento cuando sabemos con suficiente certeza qué recursos necesitará el usuario a continuación. La idea consiste en anticipar una descarga o una conexión para reducir la espera posterior.


Esta optimización no debe aplicarse indiscriminadamente. Cada recurso anticipado consume red, memoria y espacio de caché, aunque finalmente no se utilice. La clave es elegir la técnica adecuada —`prefetch`, `preload`, `preconnect` o `dns-prefetch`— según el momento en que se necesitará el recurso.


## Qué significa precargar elementos


La precarga agrupa varias técnicas que proporcionan pistas al navegador. Estas pistas no siempre son órdenes obligatorias: el navegador puede tener en cuenta la prioridad, el estado de la red, las preferencias de ahorro de datos y otros factores antes de ejecutarlas.


Podemos anticipar, entre otros elementos:

- imágenes que aparecerán en una navegación posterior;
- hojas de estilo o módulos utilizados en la siguiente página;
- documentos que probablemente visitará el usuario;
- conexiones con otros orígenes necesarios para fuentes, imágenes o una `API`.

No todas estas situaciones se resuelven con el mismo valor de `rel`.


## Precargar recursos futuros con prefetch


El artículo original utilizaba el elemento `<link>` de [HTML](https://lineadecodigo.com/html/) con `rel="prefetch"`. Este enfoque continúa siendo válido como pista para recursos que probablemente se necesitarán en una navegación futura.


Para anticipar una imagen podemos escribir:


```html
<link rel="prefetch" href="/img/imagen-detalle.png" />
```


También podemos solicitar un documento que el usuario probablemente visitará después:


```html
<link rel="prefetch" href="/otra-url/" />
```


El navegador descarga estos recursos con una prioridad baja y trata de almacenarlos en caché. Si después se solicita la misma `URL` y la respuesta sigue siendo reutilizable, puede aprovecharse la copia descargada.


`prefetch` resulta apropiado cuando:

- el recurso pertenece a una navegación posterior, no a la página actual;
- existe una probabilidad alta de que vaya a utilizarse;
- la descarga no contiene una operación con efectos secundarios;
- el servidor permite almacenar la respuesta en caché.

## Diferencia entre prefetch y preload


`prefetch` y `preload` no son equivalentes:

- `prefetch` prepara recursos de baja prioridad para una navegación futura.
- `preload` adelanta la descarga de un recurso importante para la página actual.

Con `preload` debemos indicar el tipo de recurso mediante el atributo `as`. Por ejemplo, para una imagen crítica de la página actual:


```html
<link
  rel="preload"
  href="/img/imagen-principal.webp"
  as="image"
  type="image/webp"
/>
```


Para una fuente:


```html
<link
  rel="preload"
  href="/fonts/inter.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```


El atributo `as` permite al navegador asignar la prioridad correcta, aplicar la política de seguridad apropiada y reutilizar la descarga. En recursos como las fuentes suele ser necesario `crossorigin`, incluso cuando se sirven desde el mismo origen.


No debemos usar `preload` para todos los archivos. Una precarga que no se consume pronto desperdicia ancho de banda y puede competir con recursos realmente críticos.


## Anticipar conexiones con preconnect y dns-prefetch


Si todavía no conocemos el archivo exacto, pero sabemos que la página necesitará conectarse a otro origen, podemos anticipar parte del trabajo de red.


`preconnect` prepara la resolución `DNS` y, cuando procede, establece las conexiones `TCP` y `TLS`:


```html
<link rel="preconnect" href="https://cdn.ejemplo.com" crossorigin />
```


`dns-prefetch` se limita a resolver el nombre de dominio:


```html
<link rel="dns-prefetch" href="https://cdn.ejemplo.com" />
```


`preconnect` puede ahorrar más tiempo, pero también consume más recursos. Conviene reservarlo para unos pocos orígenes críticos. `dns-prefetch` es una pista más ligera cuando el origen podría utilizarse, pero no merece abrir una conexión completa de antemano.


## Precargar la siguiente página


El ejemplo original mencionaba `rel="next"` como mecanismo específico de Firefox:


```html
<link rel="next" href="/otra-url/" />
```


Actualmente `next` describe que el documento enlazado es el siguiente dentro de una serie, como una paginación. Un navegador puede tratarlo como pista, pero no conviene depender de este valor para garantizar una precarga.


Para documentos de una navegación futura puede seguir utilizándose `prefetch`. Cuando existe soporte y necesitamos un control más moderno, la `Speculation Rules API` permite declarar páginas candidatas:


```html
<script type="speculationrules">
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/productos/123", "/productos/456"]
    }
  ]
}
</script>
```


Estas reglas son especialmente útiles para documentos completos. Como el soporte puede variar, la navegación debe funcionar correctamente aunque el navegador ignore la regla.


## Precargar desde la cabecera HTTP


Las pistas también pueden enviarse desde el servidor mediante la cabecera `Link`. Esto permite anunciarlas antes de que el navegador termine de analizar el documento:


```text
Link: </css/critico.css>; rel=preload; as=style
```


También pueden combinarse varias relaciones:


```text
Link: <https://cdn.ejemplo.com>; rel=preconnect, </img/portada.webp>; rel=preload; as=image
```


La configuración exacta depende del servidor, el proxy o la plataforma utilizada. Esta alternativa centraliza la optimización, pero debe probarse para evitar duplicar pistas que ya aparezcan en el documento.


## Impacto en el ancho de banda


La precarga supone consumo adicional. Si la predicción es incorrecta, el usuario descarga información que no utilizará.


Por ello conviene:

- limitar `prefetch` a recursos con alta probabilidad de uso;
- evitar archivos grandes en conexiones lentas;
- no anticipar todas las páginas enlazadas;
- respetar señales de ahorro de datos como `Save-Data` cuando la arquitectura permita evaluarlas;
- medir cuántas descargas anticipadas llegan a aprovecharse.

El navegador puede decidir no ejecutar una pista, pero esta posibilidad no sustituye una estrategia prudente.


## Caché y cabeceras de respuesta


Para que una descarga anticipada resulte útil, la respuesta debe poder reutilizarse. Directivas de `Cache-Control` como `no-store` impiden almacenarla, y otras configuraciones restrictivas pueden limitar el beneficio.


Además, la partición moderna de la caché reduce la reutilización entre sitios de distinto origen superior. Por este motivo, `prefetch` ofrece mejores resultados cuando el recurso pertenece al mismo sitio y la `URL` coincide con la que se solicitará después.


También debemos mantener coherencia en parámetros, credenciales y políticas `CORS`. Si la solicitud real no coincide con la anticipada, el navegador puede tener que descargar el recurso de nuevo.


## Estadísticas, privacidad y seguridad


Una precarga genera una petición `HTTP` aunque el usuario nunca llegue a visualizar el recurso. Por tanto, puede aparecer en los registros del servidor y alterar métricas basadas únicamente en solicitudes.


No deben anticiparse enlaces que:

- cierren una sesión;
- modifiquen datos;
- confirmen compras o reservas;
- activen acciones mediante una petición `GET`;
- revelen información sensible sin una necesidad clara.

Las rutas consultivas también pueden contener datos personalizados. Antes de precargarlas hay que revisar sus controles de caché, autenticación y privacidad.


## Soporte actual de los navegadores


La afirmación original limitaba el soporte a Firefox y versiones tempranas de Chrome. Esa información ha quedado desactualizada: `prefetch` está disponible en navegadores modernos, aunque su ejecución y la forma de almacenar los recursos siguen dependiendo del navegador y del contexto.


No es recomendable comprobar el soporte mediante antiguas páginas de prueba ni depender de preferencias internas como:


```text
user_pref("network.prefetch-next", false);
```


Esa configuración pertenece al navegador del usuario y no forma parte del código de una página. La aplicación debe funcionar aunque las pistas se desactiven o se ignoren.


## Cómo comprobar si la precarga funciona


Las herramientas de desarrollo permiten comprobar el comportamiento:

1. Abrimos el panel `Network`.
2. Cargamos la página que contiene las pistas.
3. Buscamos la solicitud anticipada y revisamos su prioridad y cabeceras.
4. Navegamos a la página prevista.
5. Confirmamos si el recurso procede de la caché y si se evitó una segunda transferencia.

También debemos medir el resultado con datos reales. Una reducción de tiempo en la navegación objetivo debe compensar los bytes adicionales y cualquier impacto sobre la página actual.


## Buenas prácticas para precargar elementos


Antes de añadir una pista de recursos conviene seguir este proceso:

- Identificar una espera real mediante herramientas de rendimiento.
- Elegir `preload` para recursos críticos de la página actual.
- Elegir `prefetch` para recursos probables de una navegación futura.
- Utilizar `preconnect` o `dns-prefetch` cuando el coste principal sea establecer la conexión.
- Incluir `as`, `type` y `crossorigin` cuando correspondan.
- Evitar duplicados y recursos que no se consumirán.
- Revisar `Cache-Control`, `CORS` y la coincidencia exacta de la `URL`.
- Probar con conexiones lentas y ahorro de datos.
- Comparar las métricas antes y después del cambio.

Precargar elementos en una página web puede acelerar experiencias previsibles, como el siguiente paso de un proceso o una vista de detalle. El beneficio aparece cuando la predicción es precisa; si se utiliza sin medir, la técnica puede aumentar el consumo sin mejorar la navegación.

