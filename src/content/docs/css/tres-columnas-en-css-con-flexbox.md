---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHM4TSWX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGrCsrzJfOPDy9PogQVu%2B8vCHKLjT%2BbKUsDl9Qka%2FsiGAiEA3yHVDHmQS020vKV7IO3eDE%2BUmjG8umsxQjKQd1A7Iscq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDINkvWkHvCBiNO4o%2BSrcAzneRGwKF0VTx6EOVH96sHs5Ltl0cv0arbyBQYOcDoKb7tBH%2FtOjXEpVMGDRCb3oZFy60txDpDC3rjDru4T48DQ6Itm0OSNorwcsTkicuWvXJFAKAAk1cprwRSURxiS40EMHGxlWWPmkhkk2SJgJ0fZ3wTghci1%2BgFPZ6FzebPgfkP%2Bnsd09Jzi%2FGlkHec9ZBVY2nlwbI70ZmbJIv2%2BwQB9GX5eSfjz1xkC3PKAz34euLtiILUUKYRi5JARMV15Zkw4BgMiIAyff%2BGw5e0nRsgwY0F7uvIUXc80q9w9yG%2BbYMoKej8mwsdZYUV47fQEsyi99TqKpZIQxD9K3yaA4P%2BN%2BjVXUYFsGBrLiDJPh8YOXbFcOt4ErL2cWA%2Fxcqvuvu2JDy40nmzYGmSi0rwdotP800ntZT8Yv0qWoFrFwFqGSMYJ2Pp%2Bdk2AvMcCLmBSMhk%2FCn79m1KzsKKLbDGp4ib53HrVBH9O%2BVz8dqryMBWlh%2FD8248vpmwf8STp7XF8n6tNYL%2BbCnwpMpPRbxVR6HBNVx%2F%2BAVZXxadh4c5FI4LqICv46WIvT1P1AG%2BZ0%2FZ4rspVIRdUSJ%2BtqYqzkMOROTujdQBlXvGUqy%2Fte%2FlXSG3xYRsKEuIC5Loy62ubmMLq9wskGOqUBzg9QzenuRiq7tADpHcmQnGloJMuqot6vsGuvS1BpKhJn7JHFTItO%2BTbZCC9iRjkRIhupPmWe1eoT8ApMc3rcWeRIBlov4kOkl7um2ZtR48A24LtLPFJN7uW7Qotebp6jY82cKrcJT7cHX0JtOYF5a778Lxg9fW67%2BXiwzKSC2rW27luL7SuSg%2FVTf7cIE28N3c1L8%2FbXfEDNOl7YYXeHPDw%2FrJnm&X-Amz-Signature=b84fb57e0e838ce61cc47427b764f56cf003dbdc8919ca9d36182598f32a7295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHM4TSWX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGrCsrzJfOPDy9PogQVu%2B8vCHKLjT%2BbKUsDl9Qka%2FsiGAiEA3yHVDHmQS020vKV7IO3eDE%2BUmjG8umsxQjKQd1A7Iscq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDINkvWkHvCBiNO4o%2BSrcAzneRGwKF0VTx6EOVH96sHs5Ltl0cv0arbyBQYOcDoKb7tBH%2FtOjXEpVMGDRCb3oZFy60txDpDC3rjDru4T48DQ6Itm0OSNorwcsTkicuWvXJFAKAAk1cprwRSURxiS40EMHGxlWWPmkhkk2SJgJ0fZ3wTghci1%2BgFPZ6FzebPgfkP%2Bnsd09Jzi%2FGlkHec9ZBVY2nlwbI70ZmbJIv2%2BwQB9GX5eSfjz1xkC3PKAz34euLtiILUUKYRi5JARMV15Zkw4BgMiIAyff%2BGw5e0nRsgwY0F7uvIUXc80q9w9yG%2BbYMoKej8mwsdZYUV47fQEsyi99TqKpZIQxD9K3yaA4P%2BN%2BjVXUYFsGBrLiDJPh8YOXbFcOt4ErL2cWA%2Fxcqvuvu2JDy40nmzYGmSi0rwdotP800ntZT8Yv0qWoFrFwFqGSMYJ2Pp%2Bdk2AvMcCLmBSMhk%2FCn79m1KzsKKLbDGp4ib53HrVBH9O%2BVz8dqryMBWlh%2FD8248vpmwf8STp7XF8n6tNYL%2BbCnwpMpPRbxVR6HBNVx%2F%2BAVZXxadh4c5FI4LqICv46WIvT1P1AG%2BZ0%2FZ4rspVIRdUSJ%2BtqYqzkMOROTujdQBlXvGUqy%2Fte%2FlXSG3xYRsKEuIC5Loy62ubmMLq9wskGOqUBzg9QzenuRiq7tADpHcmQnGloJMuqot6vsGuvS1BpKhJn7JHFTItO%2BTbZCC9iRjkRIhupPmWe1eoT8ApMc3rcWeRIBlov4kOkl7um2ZtR48A24LtLPFJN7uW7Qotebp6jY82cKrcJT7cHX0JtOYF5a778Lxg9fW67%2BXiwzKSC2rW27luL7SuSg%2FVTf7cIE28N3c1L8%2FbXfEDNOl7YYXeHPDw%2FrJnm&X-Amz-Signature=babf309f2ff29e3f107883ead72973b3dab7c50b9ff1ee1b6a6eaa41a4174630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

