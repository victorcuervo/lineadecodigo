---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNBCF3F3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvmpuYhwQbPne3aptII%2BH8eWJFvt74VGPdrQv6Ln%2FGwAiB4c5IXzCmMd%2FCDSP0%2Fl4EcE1ihmuc4g3uIYLWAiRxGTyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMl68BmKy09PZCqKybKtwDULYeHLFHhsdOjv9Mf0deS6v5kv37gl0wnUk1APIUFW8ot1lNZjeA4I1VXKYZvZOgSsBJL6nbKV2HenLp6jzeND0PvKiUygTolDmFXvs%2BHLjDwpigEP1Z1dePw00OpsHrPaOqSgwF3OjC3el1ek4Tl33JDcnP5jx44JqhOgZtAmlkhZcxmXIGrGPe22LGfkV0IgzidOZVrsD%2BA7jDG8%2F20bbPW6HkzoJrdohIKgLvaBCBJdN7WuIPKqabs1YnCMIiwW4V2Jqkt90a%2FJ3TaIlbB%2Fy58shlzIbBTuzeIg3v0IoOfON%2FWi4a8XGq%2FCLbCX5ErsL3ddxrRMYLRmGcmAfd5SKzSEDS3Fy8JopC9BiJYg30CEWgaUdz%2BJxCo5zvrlx5p0gMdODCSY6cj5lTsD7e9fZ55Qmw3mRbAA80YCi%2BRsTBd1JWuhqa8XOwbGlD3jMjrPGk4RAqkP8kTu%2BkWGqgLW%2BC5mWuUMmujyiYxdrqYVBPslzyZ5op4yI7dYSWfOPw5aHlWjeOwH%2Fk8ql%2FSTdkI7o45nfYq75hUok%2FHi1WUQvysTggyzPggTr17l01R3pjW%2BhVFXmgDnDfxyiUJ52LoH6S6isp9xjeH5D4111XTiYPu5yZ1LZHZmMLFwQw46bJyQY6pgHcnJxiaS7C8OsSnwuRlgH3%2BxMvIVEreQLyTmaQmCa%2BK%2F2Kzu8SAK6KIn8Ag%2F%2B77hxR51UFXVfjDrAPf9NLMR2mRpMKBh%2FYn5Gi9i6OtQ2cxGCbkzDEy2SywjDHZkL1Kcz5zEYYp1OS2aNnm%2Bb%2FCSambwxU68u64jolAEkZLOtt7YPm5EW7YYwhpPQEB3ukS6FJbEvJLNSuWre5gxVme9Vf8dfLAFT6&X-Amz-Signature=7b0517c205202a0564f2160f362135cbf71cc5b86e113460a5a2e83ad72535c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNBCF3F3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvmpuYhwQbPne3aptII%2BH8eWJFvt74VGPdrQv6Ln%2FGwAiB4c5IXzCmMd%2FCDSP0%2Fl4EcE1ihmuc4g3uIYLWAiRxGTyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMl68BmKy09PZCqKybKtwDULYeHLFHhsdOjv9Mf0deS6v5kv37gl0wnUk1APIUFW8ot1lNZjeA4I1VXKYZvZOgSsBJL6nbKV2HenLp6jzeND0PvKiUygTolDmFXvs%2BHLjDwpigEP1Z1dePw00OpsHrPaOqSgwF3OjC3el1ek4Tl33JDcnP5jx44JqhOgZtAmlkhZcxmXIGrGPe22LGfkV0IgzidOZVrsD%2BA7jDG8%2F20bbPW6HkzoJrdohIKgLvaBCBJdN7WuIPKqabs1YnCMIiwW4V2Jqkt90a%2FJ3TaIlbB%2Fy58shlzIbBTuzeIg3v0IoOfON%2FWi4a8XGq%2FCLbCX5ErsL3ddxrRMYLRmGcmAfd5SKzSEDS3Fy8JopC9BiJYg30CEWgaUdz%2BJxCo5zvrlx5p0gMdODCSY6cj5lTsD7e9fZ55Qmw3mRbAA80YCi%2BRsTBd1JWuhqa8XOwbGlD3jMjrPGk4RAqkP8kTu%2BkWGqgLW%2BC5mWuUMmujyiYxdrqYVBPslzyZ5op4yI7dYSWfOPw5aHlWjeOwH%2Fk8ql%2FSTdkI7o45nfYq75hUok%2FHi1WUQvysTggyzPggTr17l01R3pjW%2BhVFXmgDnDfxyiUJ52LoH6S6isp9xjeH5D4111XTiYPu5yZ1LZHZmMLFwQw46bJyQY6pgHcnJxiaS7C8OsSnwuRlgH3%2BxMvIVEreQLyTmaQmCa%2BK%2F2Kzu8SAK6KIn8Ag%2F%2B77hxR51UFXVfjDrAPf9NLMR2mRpMKBh%2FYn5Gi9i6OtQ2cxGCbkzDEy2SywjDHZkL1Kcz5zEYYp1OS2aNnm%2Bb%2FCSambwxU68u64jolAEkZLOtt7YPm5EW7YYwhpPQEB3ukS6FJbEvJLNSuWre5gxVme9Vf8dfLAFT6&X-Amz-Signature=8e1700c303a3d2a591d265ec586f39706c21e4e52ba005780dfc74ef8d77f144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

