---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBP45MGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdEwDqy1%2FtBet2AegZ04reXNqhMrOITAkjv90lu6OMQIgJ8kH1g7atFArYaO%2FJDL2GRRvXApx9j4Ax7mducV1apkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7XdkPEL%2Fk3tcbPuyrcAzU6B2NQIbs%2BSu8OmBigXSUyHdlCcz%2BeC7rXThWI698SWIImo7Q00vgKNqB7fYEzxGTsH0sxDl8m12%2BuoP5GftkdVNRFtnPtsNGMjiVfpnPNj%2BASy7S%2Fks%2Fad%2BiLc0vuxnY5%2F7yrLKySst8W2d44ysthVd0FwHGq0Z9F6Sn%2BZ%2F17Kto52qoox%2BXuPl11wiNQkAZp%2FMJwpdPfAB75vAcNxeseBeB%2Fz6WPlxgbE%2FsJYv6G2DbFkMIMN%2BELJgWU8znCoOr4%2FjNM4E3xwH2ufJTHgAfI6k1vIPxXdBndh7aF4vi7EV4MMGroQsmgudvOno6m%2B3wXR9Y0BJxh2Vq5bLXl3J2iRZpvD6q691JLDFij%2FxPhZFHSx6x2bBOsWnEXslFo%2FFoBSxbKGDvoQ%2BC7zFRIao5bPH8xfmfr5iHs4cG%2Fkkx76jirMbgk6dEdEVY1vrAw9Eg4F3fdjaiuPFy3kRU4GdB7DHdi3z1Cc1Th6kPbsMoMj2qZOCpgTDGhQPP0%2F%2F30MQMmOwUYsg0rO6U9jQ89w32D8j%2FGmGYiRUid93IWMANESK1zDirqYg3ogkLAZS0YgBtb%2FYTK9qT5spttc1syj2P72J7EOR4IxQqTk9LZ6mjdlA7A82ERSWRZP%2FDTMNOz3MkGOqUB7NIsrdD%2BPXsV4xGd%2FsmLGk8M%2B676IXMXzKRY6%2FcXqNpggSsviyQ67Rf1yVsRTQzr9O1ZU6CHL2HO1T70LJ0fDzXPzEoEQDu2m3HEwYOlbh8V7xedsrLak84uQI0KsDOpdu7ne6jwZv%2Bdz9htPzph44n0aiUL%2FbzlRsrW5AKLRyscBmK6Dl2Vnja%2FUT1CY9TOe3I7mjyqHg99uGVIvnZDcZ8kWGdd&X-Amz-Signature=363bbd7ef1fa36b4594f642628890eb832ce7f6f84f4b811f6473f6c0050a12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBP45MGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGdEwDqy1%2FtBet2AegZ04reXNqhMrOITAkjv90lu6OMQIgJ8kH1g7atFArYaO%2FJDL2GRRvXApx9j4Ax7mducV1apkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7XdkPEL%2Fk3tcbPuyrcAzU6B2NQIbs%2BSu8OmBigXSUyHdlCcz%2BeC7rXThWI698SWIImo7Q00vgKNqB7fYEzxGTsH0sxDl8m12%2BuoP5GftkdVNRFtnPtsNGMjiVfpnPNj%2BASy7S%2Fks%2Fad%2BiLc0vuxnY5%2F7yrLKySst8W2d44ysthVd0FwHGq0Z9F6Sn%2BZ%2F17Kto52qoox%2BXuPl11wiNQkAZp%2FMJwpdPfAB75vAcNxeseBeB%2Fz6WPlxgbE%2FsJYv6G2DbFkMIMN%2BELJgWU8znCoOr4%2FjNM4E3xwH2ufJTHgAfI6k1vIPxXdBndh7aF4vi7EV4MMGroQsmgudvOno6m%2B3wXR9Y0BJxh2Vq5bLXl3J2iRZpvD6q691JLDFij%2FxPhZFHSx6x2bBOsWnEXslFo%2FFoBSxbKGDvoQ%2BC7zFRIao5bPH8xfmfr5iHs4cG%2Fkkx76jirMbgk6dEdEVY1vrAw9Eg4F3fdjaiuPFy3kRU4GdB7DHdi3z1Cc1Th6kPbsMoMj2qZOCpgTDGhQPP0%2F%2F30MQMmOwUYsg0rO6U9jQ89w32D8j%2FGmGYiRUid93IWMANESK1zDirqYg3ogkLAZS0YgBtb%2FYTK9qT5spttc1syj2P72J7EOR4IxQqTk9LZ6mjdlA7A82ERSWRZP%2FDTMNOz3MkGOqUB7NIsrdD%2BPXsV4xGd%2FsmLGk8M%2B676IXMXzKRY6%2FcXqNpggSsviyQ67Rf1yVsRTQzr9O1ZU6CHL2HO1T70LJ0fDzXPzEoEQDu2m3HEwYOlbh8V7xedsrLak84uQI0KsDOpdu7ne6jwZv%2Bdz9htPzph44n0aiUL%2FbzlRsrW5AKLRyscBmK6Dl2Vnja%2FUT1CY9TOe3I7mjyqHg99uGVIvnZDcZ8kWGdd&X-Amz-Signature=27595617dc323b1611318a4704841d2774e25252a72f8c01eaba9fca0b6fa7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

