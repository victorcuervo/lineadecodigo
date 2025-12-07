---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TJJJFN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA0qJMxPPgYfO%2FsiBeW7UUMScrnh3mlrBkcNzacii3NgIgItQeLdbiJG6fhQdSjUzhise3hmE3%2FIUc%2FOvU4ldahesqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2lsUcTaxKHR6BcXSrcA6NKGcMTM5QMzhOsTPgmdD2bgas1vgznf9%2Fh1PFBX31jQKEmZhau4Q181z1HKZdSq3Jm167wQ62pF%2BpIBC9epPt0ZMNymqXbjqy3Y4Nfo%2B47M3aj3orlBmfwgBPwRIYFmxTFf2HaW6rba5%2F3xhdTLqro3nUZNmybUwRQq3J6b6c15Vh6h3Ioog8o7E9yS1vGC9WO2rorr6aMzsxX5%2Blo1s0w0mPDCSB30w8bcd5xSHkB319k9fJgRJcwRKCiJyzVP%2Bl2rz8ThgMvOc8N4RvvqnoB2R8TNzfVAUidvuLjQ6ZXYtZ0xcyrVvrwdzgkK19Xoj982qMxwASEF8P%2BdPO7srLkEyrYoIvizLgMAwLpG%2F3FLGX2vyyt7VV4Y0I7dSe9Hc30C35ry%2FzZagwYEhCIgzotbQUoQF4tfhGJAGGsrniRrSKIUSHC1rFEQIbQV7gghmgWyTBl6IHA1UyASOE00KhQmWQPRjFO7YX%2BJlqjpR0RRYqMh7VjsyCB26NeU6S20zDFPhUxHj8ER8ASR2i7RgSveBd%2B8k5b7UinF7I0kUPtie7GoHKfVTSzplUKU6V4iOnFfHf6mnzRGsbItzvHJ3iGDtcZ9CrkfQgFZspMLxjt9uwP8MQ%2FGW%2B5WPZrMLWZ1ckGOqUBTbW%2Fp8NvSIolvocApABjWnhzsxSUsmJ7xI5%2FZZL1zYQVD0EEkhlv4oBIHCMUVtilZws0DwLH37NBFC4W5dn%2FVPZ%2BuzXl3JaRtPYicYHN3GkA6Px8A%2Bmz%2BVIgEidVkt6ubgMh58MaVer0aT4RU4MY9N%2BmlG2m46htAs%2F7%2BsE8sTjfDeAKobyWJyZ%2BvEgdgph83FBaIUqDo9wg2hNeh6B271SE4c0J&X-Amz-Signature=e3ecf8563cb31c13bf55335e98732a6e28bcc56938557479c1889ed971e89f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TJJJFN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA0qJMxPPgYfO%2FsiBeW7UUMScrnh3mlrBkcNzacii3NgIgItQeLdbiJG6fhQdSjUzhise3hmE3%2FIUc%2FOvU4ldahesqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2lsUcTaxKHR6BcXSrcA6NKGcMTM5QMzhOsTPgmdD2bgas1vgznf9%2Fh1PFBX31jQKEmZhau4Q181z1HKZdSq3Jm167wQ62pF%2BpIBC9epPt0ZMNymqXbjqy3Y4Nfo%2B47M3aj3orlBmfwgBPwRIYFmxTFf2HaW6rba5%2F3xhdTLqro3nUZNmybUwRQq3J6b6c15Vh6h3Ioog8o7E9yS1vGC9WO2rorr6aMzsxX5%2Blo1s0w0mPDCSB30w8bcd5xSHkB319k9fJgRJcwRKCiJyzVP%2Bl2rz8ThgMvOc8N4RvvqnoB2R8TNzfVAUidvuLjQ6ZXYtZ0xcyrVvrwdzgkK19Xoj982qMxwASEF8P%2BdPO7srLkEyrYoIvizLgMAwLpG%2F3FLGX2vyyt7VV4Y0I7dSe9Hc30C35ry%2FzZagwYEhCIgzotbQUoQF4tfhGJAGGsrniRrSKIUSHC1rFEQIbQV7gghmgWyTBl6IHA1UyASOE00KhQmWQPRjFO7YX%2BJlqjpR0RRYqMh7VjsyCB26NeU6S20zDFPhUxHj8ER8ASR2i7RgSveBd%2B8k5b7UinF7I0kUPtie7GoHKfVTSzplUKU6V4iOnFfHf6mnzRGsbItzvHJ3iGDtcZ9CrkfQgFZspMLxjt9uwP8MQ%2FGW%2B5WPZrMLWZ1ckGOqUBTbW%2Fp8NvSIolvocApABjWnhzsxSUsmJ7xI5%2FZZL1zYQVD0EEkhlv4oBIHCMUVtilZws0DwLH37NBFC4W5dn%2FVPZ%2BuzXl3JaRtPYicYHN3GkA6Px8A%2Bmz%2BVIgEidVkt6ubgMh58MaVer0aT4RU4MY9N%2BmlG2m46htAs%2F7%2BsE8sTjfDeAKobyWJyZ%2BvEgdgph83FBaIUqDo9wg2hNeh6B271SE4c0J&X-Amz-Signature=5cce58493d8a5642579b5b00a651021f034ce260c8ddd68213eb49d8a0596886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

