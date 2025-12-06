---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYS4LPCS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4Esij4pv3ZOooSjHNyzSAW4UJ0Mrh6IQX4U6qm%2FiCxAiEAjpISh892rMCl9A4DYS7YtED5%2BVJwlEkhhiKCBAOdKboq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJVP0i6ZoklRTm103yrcA7PWZ94DZL2Sz92k1uCj557O%2FfadRbGifcJOPzMGF5KWWwynoV92Ph4KhT6UvA9E8zrA5DHlmevxD1lCT%2FirCLbvBlypfbSxN8ZwMF4vaolBc6RnxATgNVO2NAJlYG5WkxR57lwrx5qQInhPfILc%2BXNVsBzfHlrW2E6uVDKwrjFvlgR%2FCv8QrzaLT7GSQprstJxg4U66ps%2B%2Bh%2FuZ6MdQu%2B30Z8ZRBDr449xwqV7G4QyZ2uEREpEQ0K%2BUOD5Z6VaKlyW2f8JxlYUWP9vujzLikOonm7Hq8iBjw5dPD3iaPSRe6ac1nBAxGv3QPUMtFtthI5Ii3Vs0%2B9%2F2OGmv%2BT1AVTJAdVyB0YJ1ibYqVZ4P41txrM6FyPMA2tadW6k7phq0jh%2FZcdZvTkJKXXHcONWNPeP1MLbIDZLeIzukGjHkOKVG1ZMN6dAKYqk1DM5hdsJu%2BxVmuKZsfkj1TO3n8oj7Z4i2ZSMlqU160pI9lBAdMcpodq8KNmT3tadw5OvcKWipU81IlutMcaI8n8ADPR%2BwGmZw3xF36cfYkKK7UT1NiFTPpm2X1%2FcJIoV7Yfe9oAC8tnhxrpVSmfLRqq0wBcQLjqWawAv4tbp9O9wiwjDEz4Rf6GBv7Y2hOxSAFbYgMKT9zskGOqUBt5Vo%2BcxC4JOEZI5GN6unHszXCMsG94vpcJaQ9%2BKktISXRi7jRznUhn0T2DWNXtia%2BOLg0mpNJlbOf%2BxfCFfWaxCPNqwE5drbUO841zfuIBeh%2BvcBJbMD5NZKxzBrFpjGi8%2FnYQIriVx3Gqv1dxBk%2FzcIQGBgm8uJB6UTccJ%2BTQdSBs8KU8YRFKr0tG3VJUkCSJvEi%2FsEQHQ5wK9%2FXHjNG1Svk86n&X-Amz-Signature=77b162f471ac91083debbc0d477c168b19220b58aca3b46c85925717c9a93541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYS4LPCS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4Esij4pv3ZOooSjHNyzSAW4UJ0Mrh6IQX4U6qm%2FiCxAiEAjpISh892rMCl9A4DYS7YtED5%2BVJwlEkhhiKCBAOdKboq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJVP0i6ZoklRTm103yrcA7PWZ94DZL2Sz92k1uCj557O%2FfadRbGifcJOPzMGF5KWWwynoV92Ph4KhT6UvA9E8zrA5DHlmevxD1lCT%2FirCLbvBlypfbSxN8ZwMF4vaolBc6RnxATgNVO2NAJlYG5WkxR57lwrx5qQInhPfILc%2BXNVsBzfHlrW2E6uVDKwrjFvlgR%2FCv8QrzaLT7GSQprstJxg4U66ps%2B%2Bh%2FuZ6MdQu%2B30Z8ZRBDr449xwqV7G4QyZ2uEREpEQ0K%2BUOD5Z6VaKlyW2f8JxlYUWP9vujzLikOonm7Hq8iBjw5dPD3iaPSRe6ac1nBAxGv3QPUMtFtthI5Ii3Vs0%2B9%2F2OGmv%2BT1AVTJAdVyB0YJ1ibYqVZ4P41txrM6FyPMA2tadW6k7phq0jh%2FZcdZvTkJKXXHcONWNPeP1MLbIDZLeIzukGjHkOKVG1ZMN6dAKYqk1DM5hdsJu%2BxVmuKZsfkj1TO3n8oj7Z4i2ZSMlqU160pI9lBAdMcpodq8KNmT3tadw5OvcKWipU81IlutMcaI8n8ADPR%2BwGmZw3xF36cfYkKK7UT1NiFTPpm2X1%2FcJIoV7Yfe9oAC8tnhxrpVSmfLRqq0wBcQLjqWawAv4tbp9O9wiwjDEz4Rf6GBv7Y2hOxSAFbYgMKT9zskGOqUBt5Vo%2BcxC4JOEZI5GN6unHszXCMsG94vpcJaQ9%2BKktISXRi7jRznUhn0T2DWNXtia%2BOLg0mpNJlbOf%2BxfCFfWaxCPNqwE5drbUO841zfuIBeh%2BvcBJbMD5NZKxzBrFpjGi8%2FnYQIriVx3Gqv1dxBk%2FzcIQGBgm8uJB6UTccJ%2BTQdSBs8KU8YRFKr0tG3VJUkCSJvEi%2FsEQHQ5wK9%2FXHjNG1Svk86n&X-Amz-Signature=61ad639da78bd6c0725ec207bc546c86eeca165a6f69abffd3d0f85a24f7ab0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

