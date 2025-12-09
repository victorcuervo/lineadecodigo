---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEB7R3W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Ob8wurBydgWe4vSNguBVzk4y2svlMvDIaFfOR1wr5gIgDXZ28vBq13ue2rpnFWIMJTxY4S5Uwoc3Qyv%2FaNifE%2FoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXi3HWYwtNibCZ1QircA4D22wvtssbtMJbdnCzriJTC85iFhQFJ54e3KnhQ%2BhuvstEgZUIE0ojUqziBGI%2Fit19s44%2BIYX0pOx1empO2zXaAB%2F64qiD8G434hr3TZOuH867DP0VoBB4HSuYXwIto4IIbeRKb%2FcSAVRf%2BHMrSsD4HQhv2YTp1QsHljtILhj%2FcSzA5AcSL8wm1jhI4nEp5ZaoUc5WvmjSI9U87bW2O1pu3vMDUHAh5vtIO4od1oAEfcFBQgbvpj2LP3%2FvDD51zGeomdkuHmZ1qyDpQYCpuutIWy9fmpHt8JWJ3yVqsu1wZ0iM6WQwD2yIiEdsD1ArHRV0IiBgmbLvLHJcNPVY0bkam5DNC7zfhgTsfEFs0UuwUL7kIGUQX%2FgPOdcJolq139wpRGyZ2lZbaCzpfovHMkwtv0DoPAJ7PEz3bKIPkLcmh260d1U%2B7UffaCIep3CzcNPT%2FCmRiYO1i%2BB7uO7uGHobkiX9QUs%2B6NjeXEOU3nhBteqtN6ltF0fNipC%2BGZQAe8MD8iU5NUZ%2B%2B8AsucGz9aDyFsMhWhfZz3XYUt5AjpM2JH8T0Yn14BtIg1JbY0R7rqga6eTuvzofD8zRuuCdTH1ndS2DSLsGJlLIHeOsidTWFlRAJei7JEaPhG8Z0MNPl3skGOqUB4RmW7hbyGC1UN86TbE2YMG0iBdfOqZWIUrTfrZqL01iV4QDI3X4C%2Bk6AxTwgf1I7OSS44fTAk2GqetokUWJKlLnI5tJ6c829LV3Z%2BumCWBRbABw2OKH3t6OAOJLIGFXCh5UwyvpEU3Qa8wS1am102qK7zSgdislTnHClcYJd038JY9QEugql0%2B%2BwFJbG%2B4fPqqNq4e92o6OwcA3LXIchNP4f9dF4&X-Amz-Signature=44f1e64f4c33b02536d9d8f4205392f00fa733675a6fa1569d5f54e98e11c15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEB7R3W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Ob8wurBydgWe4vSNguBVzk4y2svlMvDIaFfOR1wr5gIgDXZ28vBq13ue2rpnFWIMJTxY4S5Uwoc3Qyv%2FaNifE%2FoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXi3HWYwtNibCZ1QircA4D22wvtssbtMJbdnCzriJTC85iFhQFJ54e3KnhQ%2BhuvstEgZUIE0ojUqziBGI%2Fit19s44%2BIYX0pOx1empO2zXaAB%2F64qiD8G434hr3TZOuH867DP0VoBB4HSuYXwIto4IIbeRKb%2FcSAVRf%2BHMrSsD4HQhv2YTp1QsHljtILhj%2FcSzA5AcSL8wm1jhI4nEp5ZaoUc5WvmjSI9U87bW2O1pu3vMDUHAh5vtIO4od1oAEfcFBQgbvpj2LP3%2FvDD51zGeomdkuHmZ1qyDpQYCpuutIWy9fmpHt8JWJ3yVqsu1wZ0iM6WQwD2yIiEdsD1ArHRV0IiBgmbLvLHJcNPVY0bkam5DNC7zfhgTsfEFs0UuwUL7kIGUQX%2FgPOdcJolq139wpRGyZ2lZbaCzpfovHMkwtv0DoPAJ7PEz3bKIPkLcmh260d1U%2B7UffaCIep3CzcNPT%2FCmRiYO1i%2BB7uO7uGHobkiX9QUs%2B6NjeXEOU3nhBteqtN6ltF0fNipC%2BGZQAe8MD8iU5NUZ%2B%2B8AsucGz9aDyFsMhWhfZz3XYUt5AjpM2JH8T0Yn14BtIg1JbY0R7rqga6eTuvzofD8zRuuCdTH1ndS2DSLsGJlLIHeOsidTWFlRAJei7JEaPhG8Z0MNPl3skGOqUB4RmW7hbyGC1UN86TbE2YMG0iBdfOqZWIUrTfrZqL01iV4QDI3X4C%2Bk6AxTwgf1I7OSS44fTAk2GqetokUWJKlLnI5tJ6c829LV3Z%2BumCWBRbABw2OKH3t6OAOJLIGFXCh5UwyvpEU3Qa8wS1am102qK7zSgdislTnHClcYJd038JY9QEugql0%2B%2BwFJbG%2B4fPqqNq4e92o6OwcA3LXIchNP4f9dF4&X-Amz-Signature=8a58225130d2ab2a6066a81c38ff219bb8e619341cc04332a8d9731681d03b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

