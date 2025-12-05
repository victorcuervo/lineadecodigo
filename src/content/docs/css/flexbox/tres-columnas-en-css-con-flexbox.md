---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SDKOMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCo7drv0qt0cB7oauMiwJTTX6w2LTJ82nma9IGTgOs%2BAiBlDZtTtP94KNsLmK71ZARqNCLXInUA7jyKtmN6oLE5PSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMf2TFWs%2B43POlNT8qKtwDiN87IMaraPdpBfyIcaZFGSSV%2B390wfBvBf%2BT7a8mJeEBfoR3CxzV6KfW4nC4oiD7jIvErQKi4GULe%2BTicOniyv29rM75pnq0MyiCi6UieCotaba5QIqffZRFFT98x72lTqElUA3z9GlwtEAQjOGufX6vY08TOwWHUmaIDm6ymoqe6lzT680tmbbusVcMouJjcONYowyMXYTmA4efPe%2FVdEMC0LLiGcPzr%2BAUmza6LniRWKVCPO5iSYeSOUSR4YycUGGYTa76hSQIfE5Wn9Cdd%2BKzK0X%2B6pElI0o2F6oEvk%2B7wViWKrzH2nCis75sFXZdxis%2FI3AV9l9QxJScee2oeOu0EcDhteaFp09Xps6k8rCMBWm4T0cu3OckHLq0EG0mMKRntUTeamHNRjuL4EXVdZbEsv1AATvZa9leQHz%2B96oM6OG21MWaOdLcZ6MQQDpk4GaulMFBvMDjgWYKPoQatw6PBBm5uePA%2BjMVLjwVwszLDWcuQoApJNnhuiTg3WiBXj1HahhAjcUl5JwrsqeiZuMCWp0LxzrdeHY5ory7nF1kzNwhq8AT19fEsxWAsXWoTjTOxPoj4RFsUDCZB8M0gN9boyKqdtnxjctnuhN13p8XkqdL5yZyChSQO9kw44zIyQY6pgEUVZSA7e81BNgJYxrFOL%2FNWxacPXuA697fmXQjOk3C8ysolbtW%2FlpEIhhfsw2Zt4ECjKdpjQgv34hbtKH2FxrOX9Q2b26Iw2W4Bezp4KDEjuys%2B7f8MjXcGRA83XPm34Uo92Ij8ipwHypZjsqpVRk%2FRpWdUyypOKkuSv06IflZfNWW179Zp%2BX%2B5ax6uGTDARwA0hZYT7f%2FJ18Z06OP73YTsKnzUEJt&X-Amz-Signature=120f62d373ad07d9653d31c30ee89f7be25a83374b21ec9f25e35fa4f036936e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SDKOMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCo7drv0qt0cB7oauMiwJTTX6w2LTJ82nma9IGTgOs%2BAiBlDZtTtP94KNsLmK71ZARqNCLXInUA7jyKtmN6oLE5PSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMf2TFWs%2B43POlNT8qKtwDiN87IMaraPdpBfyIcaZFGSSV%2B390wfBvBf%2BT7a8mJeEBfoR3CxzV6KfW4nC4oiD7jIvErQKi4GULe%2BTicOniyv29rM75pnq0MyiCi6UieCotaba5QIqffZRFFT98x72lTqElUA3z9GlwtEAQjOGufX6vY08TOwWHUmaIDm6ymoqe6lzT680tmbbusVcMouJjcONYowyMXYTmA4efPe%2FVdEMC0LLiGcPzr%2BAUmza6LniRWKVCPO5iSYeSOUSR4YycUGGYTa76hSQIfE5Wn9Cdd%2BKzK0X%2B6pElI0o2F6oEvk%2B7wViWKrzH2nCis75sFXZdxis%2FI3AV9l9QxJScee2oeOu0EcDhteaFp09Xps6k8rCMBWm4T0cu3OckHLq0EG0mMKRntUTeamHNRjuL4EXVdZbEsv1AATvZa9leQHz%2B96oM6OG21MWaOdLcZ6MQQDpk4GaulMFBvMDjgWYKPoQatw6PBBm5uePA%2BjMVLjwVwszLDWcuQoApJNnhuiTg3WiBXj1HahhAjcUl5JwrsqeiZuMCWp0LxzrdeHY5ory7nF1kzNwhq8AT19fEsxWAsXWoTjTOxPoj4RFsUDCZB8M0gN9boyKqdtnxjctnuhN13p8XkqdL5yZyChSQO9kw44zIyQY6pgEUVZSA7e81BNgJYxrFOL%2FNWxacPXuA697fmXQjOk3C8ysolbtW%2FlpEIhhfsw2Zt4ECjKdpjQgv34hbtKH2FxrOX9Q2b26Iw2W4Bezp4KDEjuys%2B7f8MjXcGRA83XPm34Uo92Ij8ipwHypZjsqpVRk%2FRpWdUyypOKkuSv06IflZfNWW179Zp%2BX%2B5ax6uGTDARwA0hZYT7f%2FJ18Z06OP73YTsKnzUEJt&X-Amz-Signature=accf9a5c51082d735df2de12a56391a1cc4ac79e387239920d9a385547045a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

