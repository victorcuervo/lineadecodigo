---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CA4PWBK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHceO6Mx1REsZWAONN4l1fwkj8l0Ma5N%2BS3tvOJrYpNnAiEA5EzbuajyYR9TPE9DQUygFF3ClRIJn8TMVpNkwMI7rZwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDET9SntmeV5oc6eHCrcA2ZUD5m%2F2qBL%2F6UkEiJT7F83Huy2v%2B9%2BB1teXHQlyyeX1gDaHPrqqD9dIf1GxB4En6IlwqjNTFdX0OWN0pDoU%2BYuPesqPGJ3x62e%2FSKgGKveNAO5C4P6%2Brb4gS%2BkmodxFGDSQx7wl907gZ8GeSl%2BQ2V3e45DoHKVKwKnrVrWJCdEHu5ert7PqgmtcUZlF5uh4%2BtTlFZFEBWl%2BEhlpzyqYCAMZGNjSNQdISgY%2FH%2BneK%2Fpl7Fxo8tr1WMPRvS%2FEnqtkGpYv6Fiw%2B2OZuqVSFNjQ4b9dFWau5POwtoL9vjVw%2BrGKmJmN4fUv1lmCOuroXBBhjYEKTS%2FxOmM%2B%2FyfJw53Y1mNO3gIir5pCpCBCGoO1NeBs4aTpJ43dFbhKcQ%2BGvEU15QcsDH%2F0YgN%2FOLO7kxXBqzlni%2BvQNG7pHcNAQnUW3RJUvnOk9GdjS1%2F%2FbQULBog%2BwAHMrTQfrCzYppYW5sc7RYb%2FEmgOnbgiI38JhD4Ywd1tjJEbaLW16yHXmhFKgfa2hzF1fBXte3bE33aUnBjFO%2BqgYPkwDa4JGoM2zfA0ifTYOKpbSoJcr8PEhDPzRmYR6UAgS2rKHI03c%2B3xVsW7c4XswcyF8pixaPhtYpNuIYObIdTUREhGQOr5UxzMPKLyMkGOqUB8a59CBhhSoXdCAwx2rtw87b8CKsNT%2FkzWJnMQ5w5VgEWVEWiMbEhjtrNZg5KOZhxYnKFZ43EtBtKsuYMdTwENPL3Ygns7E832OACyz%2FxmYQMYxFwsGoF%2F7NgDQpouzZdFqL2rPtWaV4M6mxRcVsTIk5b%2B0AKEjnu3tIRhy21bNHss%2F3z%2Fn%2F7DV3bq4XlefbeOi8v8g3Qzxluo4MBZqP8YAQACQpy&X-Amz-Signature=53aa4a8c37b433ddec73a08becf032e8e8bf421e60f04c5d27061e755066c0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CA4PWBK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHceO6Mx1REsZWAONN4l1fwkj8l0Ma5N%2BS3tvOJrYpNnAiEA5EzbuajyYR9TPE9DQUygFF3ClRIJn8TMVpNkwMI7rZwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDET9SntmeV5oc6eHCrcA2ZUD5m%2F2qBL%2F6UkEiJT7F83Huy2v%2B9%2BB1teXHQlyyeX1gDaHPrqqD9dIf1GxB4En6IlwqjNTFdX0OWN0pDoU%2BYuPesqPGJ3x62e%2FSKgGKveNAO5C4P6%2Brb4gS%2BkmodxFGDSQx7wl907gZ8GeSl%2BQ2V3e45DoHKVKwKnrVrWJCdEHu5ert7PqgmtcUZlF5uh4%2BtTlFZFEBWl%2BEhlpzyqYCAMZGNjSNQdISgY%2FH%2BneK%2Fpl7Fxo8tr1WMPRvS%2FEnqtkGpYv6Fiw%2B2OZuqVSFNjQ4b9dFWau5POwtoL9vjVw%2BrGKmJmN4fUv1lmCOuroXBBhjYEKTS%2FxOmM%2B%2FyfJw53Y1mNO3gIir5pCpCBCGoO1NeBs4aTpJ43dFbhKcQ%2BGvEU15QcsDH%2F0YgN%2FOLO7kxXBqzlni%2BvQNG7pHcNAQnUW3RJUvnOk9GdjS1%2F%2FbQULBog%2BwAHMrTQfrCzYppYW5sc7RYb%2FEmgOnbgiI38JhD4Ywd1tjJEbaLW16yHXmhFKgfa2hzF1fBXte3bE33aUnBjFO%2BqgYPkwDa4JGoM2zfA0ifTYOKpbSoJcr8PEhDPzRmYR6UAgS2rKHI03c%2B3xVsW7c4XswcyF8pixaPhtYpNuIYObIdTUREhGQOr5UxzMPKLyMkGOqUB8a59CBhhSoXdCAwx2rtw87b8CKsNT%2FkzWJnMQ5w5VgEWVEWiMbEhjtrNZg5KOZhxYnKFZ43EtBtKsuYMdTwENPL3Ygns7E832OACyz%2FxmYQMYxFwsGoF%2F7NgDQpouzZdFqL2rPtWaV4M6mxRcVsTIk5b%2B0AKEjnu3tIRhy21bNHss%2F3z%2Fn%2F7DV3bq4XlefbeOi8v8g3Qzxluo4MBZqP8YAQACQpy&X-Amz-Signature=bc38b96999d72e9dafb44e6dc52e8406a468100a0ebde37571b99b125b2c8ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

