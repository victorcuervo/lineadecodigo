---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPDMREO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyV4Erb7Dp8Wy9rIrZhVliRI9h6Mknp6unmDcJKy0GWwIgPhm5bH2f4%2BACuMl9j94HOU5vhdhZX%2BmHg7LzqQ07o6gq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOBaTPblth%2F2ilniDSrcA%2FIrGqDZiU2T4oQWUIfgv%2BZjz7E6ceK8Vl5QWwKCku8EWVRxWchOUv69K1XhR7448u3nuxwc0vp3PJYV1pXlaS%2BD48phsOwqNsaArwOMG2R6mAd8b6okLq7rARRNA59NiWW2rEZZR42L6qm2TFaKKnmCvIB2bvFTo%2BaHk856rVIcmcc3BqgeuX1gHhugUcrWfXsGKhXPqKquso0XriF0pK7hxLOM%2FhnXpH7YNPc6plTAYqYS5CeXp9mZhOxO1Xwn4UGEU8WQKKStcvkRzHdqvR6AB1sLZX7Sdy%2BxTbPjug252XTdbeUCBsuchtUqAX9tvAh%2B5PoBZ0PIeIdM7Ya1NUOGs0khOsZDO50slinryg3ZuoVzKN09xgVxoe%2FVOVLZtpVJpgEdAfOeGfEJcCWQ7ql8rSczzt1Mr083zCc%2B%2B9smtGUzzlsE2BmNhbLq3VyRITe0bEox%2BSRuvbDp2XjIop0kS%2FTEwpEYn%2FPgSRg6p2tcbBrrMqLO%2FuO1PYT5uBrEGIh5mtkKDIMYhPadJ4wLdVzPfwXKKUiLmAOOo8mh4IeWRcyYheZyhuqzIlsTatzpo11ueLhlvUJqT1jnEHMLMht3lIe%2FxSe4FDzaxNOSxYT6LINF4gPwq0ZtsmoxMM3T0skGOqUBBomlAzGTFlqdyqGkky1c4TSjv8fr60q1p2HUcg2CX2F0YA%2FhaHxvPAhQ%2FL12OI%2BSPlaNiKJkcBwsBOkf%2BJBnvQWxFLkB1Tr5kQVi3U6OyYsj2uBgQZ07WtE4QSCZv9fAiHtMEfKp4268TZXkJ1t2uAjkQXi5JxPEg7TMXHhqvk6oCO3tOzIU50N3eUgypCYp8VGtu2FYukrlcbWkX8XSiU9wlpb7&X-Amz-Signature=71159ac4ce2d73854abd5e5530ba6802804c8f9955f435e4d4b6597325ea6a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPDMREO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyV4Erb7Dp8Wy9rIrZhVliRI9h6Mknp6unmDcJKy0GWwIgPhm5bH2f4%2BACuMl9j94HOU5vhdhZX%2BmHg7LzqQ07o6gq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOBaTPblth%2F2ilniDSrcA%2FIrGqDZiU2T4oQWUIfgv%2BZjz7E6ceK8Vl5QWwKCku8EWVRxWchOUv69K1XhR7448u3nuxwc0vp3PJYV1pXlaS%2BD48phsOwqNsaArwOMG2R6mAd8b6okLq7rARRNA59NiWW2rEZZR42L6qm2TFaKKnmCvIB2bvFTo%2BaHk856rVIcmcc3BqgeuX1gHhugUcrWfXsGKhXPqKquso0XriF0pK7hxLOM%2FhnXpH7YNPc6plTAYqYS5CeXp9mZhOxO1Xwn4UGEU8WQKKStcvkRzHdqvR6AB1sLZX7Sdy%2BxTbPjug252XTdbeUCBsuchtUqAX9tvAh%2B5PoBZ0PIeIdM7Ya1NUOGs0khOsZDO50slinryg3ZuoVzKN09xgVxoe%2FVOVLZtpVJpgEdAfOeGfEJcCWQ7ql8rSczzt1Mr083zCc%2B%2B9smtGUzzlsE2BmNhbLq3VyRITe0bEox%2BSRuvbDp2XjIop0kS%2FTEwpEYn%2FPgSRg6p2tcbBrrMqLO%2FuO1PYT5uBrEGIh5mtkKDIMYhPadJ4wLdVzPfwXKKUiLmAOOo8mh4IeWRcyYheZyhuqzIlsTatzpo11ueLhlvUJqT1jnEHMLMht3lIe%2FxSe4FDzaxNOSxYT6LINF4gPwq0ZtsmoxMM3T0skGOqUBBomlAzGTFlqdyqGkky1c4TSjv8fr60q1p2HUcg2CX2F0YA%2FhaHxvPAhQ%2FL12OI%2BSPlaNiKJkcBwsBOkf%2BJBnvQWxFLkB1Tr5kQVi3U6OyYsj2uBgQZ07WtE4QSCZv9fAiHtMEfKp4268TZXkJ1t2uAjkQXi5JxPEg7TMXHhqvk6oCO3tOzIU50N3eUgypCYp8VGtu2FYukrlcbWkX8XSiU9wlpb7&X-Amz-Signature=c46c6d87b2e826ecaf08024e68d05a29e5d02690cb24f0b45fbb89dbe45bcde0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

