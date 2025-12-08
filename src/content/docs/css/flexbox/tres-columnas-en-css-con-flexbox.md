---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWNCYQIN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2R5tgbTt0Z9jTqs5YqUtEXAA1Hg8nXSIfDAmbEOAm0AiAOhzYmIGxouDUIU6vGJX89iTQLIBy%2ByRE4TxsWeF1pFCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bq3a2yrW3xDuewiDKtwDbX%2BXdArIczyTHN4df%2BgOxA0T1beSz0NRpNHEnCKKbMqrKAV5cxA4%2FZdfocihbLxXALjMp467l9JbRAma4Kby9GohbP0pZJ7KoKM999VF8SFHQVnM3QU2oM8AZakuBs6qyTY3cNW7GbGkTIwZBYFyEaiZfYjw6hd7rHaLaj3YPiHFT%2Ff9FHXPrCjPqKEhsf8QNhlzxlh4lgOwCspiBNdiIgK8Sav2qdPvW%2Fnact1O8zei%2FhYwSuhI0I7JCXZWDsrAcPEOaapeccyfbuIqJ22gAH6TznXs4DKcofphDqlcCW1J5%2B%2FDvylSpDSAnfnoB0Twmof5utRRN9WrrlnnMmvFkcdzpgWAs4ZdoyOnnJhv2xPybZGsxrRn%2BREqeK6XhFzw4FbAt%2F8Ir4FSkYoKDpWOBd83TnxfvOxjpl3bAcpad13Qd8y1fF1gS%2B6RThnep10uhPg17U3jHXc8uAvFAEEyZeBJbEqNENJYyLCOLTs%2BErNQPIJqyJqQhhi14xp1eHmBG2M%2BQ9qPEIm0mPBy8rxhh4%2B%2BysjVBOvnrY8MgIIBMoa6berdYwdogb54brpj4vP49ZIMTVTq%2FhpOO9r7TL5wuY4zkDx2gxrMBKu5UOiL6VqiXk8yHnghD%2FBqARYw6tDYyQY6pgHV0Giys%2Fxw4pSnjfyRjb5YcWHu8l%2BeuZ%2BgVRf946TxAV14%2BN1UtUM2Ip1N%2FEvKpt4w7n3LRDXGhepTtNc7Uc%2FPQ6VZiWz2M%2B5fRgt%2BQs2drpjiNcH4lIyk%2Br%2BXKQJovRGNe6p8QPWJbtBPnFzA1%2FESxeXWPQrawu59n0FbjT4D0lB87rPpl4v0d7LOWAxHUMo5YkqDUWpuuQFRJgHXgzqaV2PyhxjX&X-Amz-Signature=f78d17278718d1bff79fc032a8004f078b2425008f34a03188af45f50d69a4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWNCYQIN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2R5tgbTt0Z9jTqs5YqUtEXAA1Hg8nXSIfDAmbEOAm0AiAOhzYmIGxouDUIU6vGJX89iTQLIBy%2ByRE4TxsWeF1pFCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bq3a2yrW3xDuewiDKtwDbX%2BXdArIczyTHN4df%2BgOxA0T1beSz0NRpNHEnCKKbMqrKAV5cxA4%2FZdfocihbLxXALjMp467l9JbRAma4Kby9GohbP0pZJ7KoKM999VF8SFHQVnM3QU2oM8AZakuBs6qyTY3cNW7GbGkTIwZBYFyEaiZfYjw6hd7rHaLaj3YPiHFT%2Ff9FHXPrCjPqKEhsf8QNhlzxlh4lgOwCspiBNdiIgK8Sav2qdPvW%2Fnact1O8zei%2FhYwSuhI0I7JCXZWDsrAcPEOaapeccyfbuIqJ22gAH6TznXs4DKcofphDqlcCW1J5%2B%2FDvylSpDSAnfnoB0Twmof5utRRN9WrrlnnMmvFkcdzpgWAs4ZdoyOnnJhv2xPybZGsxrRn%2BREqeK6XhFzw4FbAt%2F8Ir4FSkYoKDpWOBd83TnxfvOxjpl3bAcpad13Qd8y1fF1gS%2B6RThnep10uhPg17U3jHXc8uAvFAEEyZeBJbEqNENJYyLCOLTs%2BErNQPIJqyJqQhhi14xp1eHmBG2M%2BQ9qPEIm0mPBy8rxhh4%2B%2BysjVBOvnrY8MgIIBMoa6berdYwdogb54brpj4vP49ZIMTVTq%2FhpOO9r7TL5wuY4zkDx2gxrMBKu5UOiL6VqiXk8yHnghD%2FBqARYw6tDYyQY6pgHV0Giys%2Fxw4pSnjfyRjb5YcWHu8l%2BeuZ%2BgVRf946TxAV14%2BN1UtUM2Ip1N%2FEvKpt4w7n3LRDXGhepTtNc7Uc%2FPQ6VZiWz2M%2B5fRgt%2BQs2drpjiNcH4lIyk%2Br%2BXKQJovRGNe6p8QPWJbtBPnFzA1%2FESxeXWPQrawu59n0FbjT4D0lB87rPpl4v0d7LOWAxHUMo5YkqDUWpuuQFRJgHXgzqaV2PyhxjX&X-Amz-Signature=1d5c814b1fb335a33f395675482bd65899cef324532e94403fe73e0fd4495489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

