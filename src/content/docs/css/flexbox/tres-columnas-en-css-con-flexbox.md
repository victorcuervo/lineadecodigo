---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4WB6AX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6%2FWIKmIDICMcfcdfkdPD0HVeS6ohJROr1PE8jfWdYWAiEAmDOxzpqfzq52w%2Fwn44DrOHQPbFSl9CQQLEE0UtbmakYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3gcjPK%2BRkLfR9yoyrcA6nMVatC1vxSptuXiHt42tSdYT5TDLwA06na4yFwljgzxpSy5yRNpG8ctWrbaMwiqdmSuVkMR2DzqTeVMPKy9qQOjVpWWQNqmS8EqzGKMEHwC1JTSKrMQozxp0otuqh3OJuVzlccs8bPZ1a%2BE%2BHi8g%2BbJRRpPJVNZtrS7t4VjvqksDlGqwzpGNIvllmv8QecRS0QgWWUePyV95n4jzEsMuzpaXvLw3jKNYgID%2B5rD7xKpqFx2ydNzmR5lyOarxUbMd%2Fb9v3ZC6LUaSOXMunl1VID2Ov21QvZ3AN%2FTzMgVHMmUwq6THAPoQlGjQkOzmhgSiiHOgMplNjIF034FcASqf%2FQ2ImIvsZidifnuEHxkeq1BnJxWpwSmrAeBfG6WXDvG9wbJFbp0ED0SwjM8PtUf31URXiLELKuo3l5ZjzQZJxkz%2BzD1M%2B93h67H%2BiL%2FQHAh%2BwJHuK4w98acvD5%2FDMUN%2FuYg68ZqDhfkMOTcBL8mJvr9XXdRhIYRLrlwwmkAKF5e10VrAgmZJvFdXfawU8Zm8HJYsfzLLl7vzo%2BRegPnXrDPlvq8WiyNZdoeKU7HMjiCGThQdnV1KZzz9EnGKwjiYeTnFLy0ko6lsDcboOEHtaOTkcJzDhewZOi3KGdMOGH3MkGOqUB%2Bkna%2Bb%2Bt3CkleokP939dqW8nRNFh3Ji5LyCkTO7frDiBHvN%2BPvgtPtwfJj5IxqNPwqV75IREd7NqaA%2FcNdplbllTOcbe2AMFmmBT1iamtmtOgipdG3n9E4JzNu50LAU2yOs0KIC6axdkbrTMU39lSPws7E7q8HR3muO9Ung6c71nVw5U2miQR8oGgYuzjLjHUwuAxF6B7DuwAqKuSSf1TGKAYER8&X-Amz-Signature=ee0f8655cccfcaa64dffcaf4e2ca099185776a73ab3d5350c5474a2a95199fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4WB6AX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6%2FWIKmIDICMcfcdfkdPD0HVeS6ohJROr1PE8jfWdYWAiEAmDOxzpqfzq52w%2Fwn44DrOHQPbFSl9CQQLEE0UtbmakYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3gcjPK%2BRkLfR9yoyrcA6nMVatC1vxSptuXiHt42tSdYT5TDLwA06na4yFwljgzxpSy5yRNpG8ctWrbaMwiqdmSuVkMR2DzqTeVMPKy9qQOjVpWWQNqmS8EqzGKMEHwC1JTSKrMQozxp0otuqh3OJuVzlccs8bPZ1a%2BE%2BHi8g%2BbJRRpPJVNZtrS7t4VjvqksDlGqwzpGNIvllmv8QecRS0QgWWUePyV95n4jzEsMuzpaXvLw3jKNYgID%2B5rD7xKpqFx2ydNzmR5lyOarxUbMd%2Fb9v3ZC6LUaSOXMunl1VID2Ov21QvZ3AN%2FTzMgVHMmUwq6THAPoQlGjQkOzmhgSiiHOgMplNjIF034FcASqf%2FQ2ImIvsZidifnuEHxkeq1BnJxWpwSmrAeBfG6WXDvG9wbJFbp0ED0SwjM8PtUf31URXiLELKuo3l5ZjzQZJxkz%2BzD1M%2B93h67H%2BiL%2FQHAh%2BwJHuK4w98acvD5%2FDMUN%2FuYg68ZqDhfkMOTcBL8mJvr9XXdRhIYRLrlwwmkAKF5e10VrAgmZJvFdXfawU8Zm8HJYsfzLLl7vzo%2BRegPnXrDPlvq8WiyNZdoeKU7HMjiCGThQdnV1KZzz9EnGKwjiYeTnFLy0ko6lsDcboOEHtaOTkcJzDhewZOi3KGdMOGH3MkGOqUB%2Bkna%2Bb%2Bt3CkleokP939dqW8nRNFh3Ji5LyCkTO7frDiBHvN%2BPvgtPtwfJj5IxqNPwqV75IREd7NqaA%2FcNdplbllTOcbe2AMFmmBT1iamtmtOgipdG3n9E4JzNu50LAU2yOs0KIC6axdkbrTMU39lSPws7E7q8HR3muO9Ung6c71nVw5U2miQR8oGgYuzjLjHUwuAxF6B7DuwAqKuSSf1TGKAYER8&X-Amz-Signature=95a74ec5fa6a3db61c39435c5a45998921456b1f6dd87a0bf4ff0343a011ab38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

