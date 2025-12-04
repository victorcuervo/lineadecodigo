---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GI4COW7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDUExFCfFyuHpnqEwTUhVrf%2BalfHvc%2Ft4GIMXERU8vMqAIgRwdLjLLJ9svauXqR7Xd5THoWKYx21abcVKT0BTVDfh4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOfpV7QWFgvL5JgVGyrcAzKWBH7bo%2FKp2%2FBLqOf8OxQRhVevzHCbkSlyR2BzPliLusZ4pLwNUOeuJ7an3E2PtcAkEdtTRt7HQR%2F1Vbnk4dE6E3egD0XUWHYqagrsGMw9Bf2mcONvS1th%2B5pJ0qW9Wxex2Fohr0GEqOUDGL2CQdg2wPNSEeqT600c5T%2BwPYjAI2%2FPPHIf2N2GDTtd5rCmgY8ECd3EW9IMjSe76TDJrXB346BzWQ9mRXJrjDl2%2BvJ7KahyHNaKGUQFMiXfu3ixkg9TWp3%2BE%2Bh6rUyOjMJjcmOGzBQjIZuRjED4RnfzjcRkwv6mPAy5S44H2cQNeNavlmmA4%2BdnTsfMc%2FOzKsIHlM5Zu4Xlig2AHT2WRWHTg0ql66Ejq9y4ruMXlz6HWLof56Ck6Oms0PxIh8MAYTOUHBGbBFwH4gKc6Cn7NF0t43gle8QSVh4Aj%2FrV412eblrMIt80YwfjTam2Q5gtx12Y%2FTs1p%2ByCCQ%2BEnRJElu0AQPZe65U3d%2FPyZVDYl%2FdLUwZ7AgvqQ7%2FOhl4LLhJ77s9olhkRZIoeJeIzhwCB2CVNZZC84C6K6gRHHEH544mq7VDBnQvaZpB263jUjV3pWwZ32wwsTXn2TEBoTsGKVZZBJOyfX9S88Muxi2foCgdGMJauxMkGOqUBO9LsCx47QIYi6GS9wKPxa802Sqw%2FCeyNMcQJ%2BO7pQIbbQM51KkyQQSE%2BeKgnzB5NzIdMQYyg%2Fzq8RB71BvC%2FGJdem4qFNdm4erp84i6PwHG%2BoQX6dNaAv8v%2BMLvJTGBy48ZOfdfFpUYK%2Bf0PufErzct5Zi3e3ciURbRPDkbCuLoWRRR6qmWgBKLL%2BKl904dQ3PYMIV9lVurmxh%2F8meiwyrg%2B7v4V&X-Amz-Signature=a923a05c641014cdf79245cd25aa390270e80da24f4c0c6bb408e37bcb1e7638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GI4COW7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDUExFCfFyuHpnqEwTUhVrf%2BalfHvc%2Ft4GIMXERU8vMqAIgRwdLjLLJ9svauXqR7Xd5THoWKYx21abcVKT0BTVDfh4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOfpV7QWFgvL5JgVGyrcAzKWBH7bo%2FKp2%2FBLqOf8OxQRhVevzHCbkSlyR2BzPliLusZ4pLwNUOeuJ7an3E2PtcAkEdtTRt7HQR%2F1Vbnk4dE6E3egD0XUWHYqagrsGMw9Bf2mcONvS1th%2B5pJ0qW9Wxex2Fohr0GEqOUDGL2CQdg2wPNSEeqT600c5T%2BwPYjAI2%2FPPHIf2N2GDTtd5rCmgY8ECd3EW9IMjSe76TDJrXB346BzWQ9mRXJrjDl2%2BvJ7KahyHNaKGUQFMiXfu3ixkg9TWp3%2BE%2Bh6rUyOjMJjcmOGzBQjIZuRjED4RnfzjcRkwv6mPAy5S44H2cQNeNavlmmA4%2BdnTsfMc%2FOzKsIHlM5Zu4Xlig2AHT2WRWHTg0ql66Ejq9y4ruMXlz6HWLof56Ck6Oms0PxIh8MAYTOUHBGbBFwH4gKc6Cn7NF0t43gle8QSVh4Aj%2FrV412eblrMIt80YwfjTam2Q5gtx12Y%2FTs1p%2ByCCQ%2BEnRJElu0AQPZe65U3d%2FPyZVDYl%2FdLUwZ7AgvqQ7%2FOhl4LLhJ77s9olhkRZIoeJeIzhwCB2CVNZZC84C6K6gRHHEH544mq7VDBnQvaZpB263jUjV3pWwZ32wwsTXn2TEBoTsGKVZZBJOyfX9S88Muxi2foCgdGMJauxMkGOqUBO9LsCx47QIYi6GS9wKPxa802Sqw%2FCeyNMcQJ%2BO7pQIbbQM51KkyQQSE%2BeKgnzB5NzIdMQYyg%2Fzq8RB71BvC%2FGJdem4qFNdm4erp84i6PwHG%2BoQX6dNaAv8v%2BMLvJTGBy48ZOfdfFpUYK%2Bf0PufErzct5Zi3e3ciURbRPDkbCuLoWRRR6qmWgBKLL%2BKl904dQ3PYMIV9lVurmxh%2F8meiwyrg%2B7v4V&X-Amz-Signature=045591afda8ecd37a474a175fa9ff5635510e6ec090af308c0c8dad763bea6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

