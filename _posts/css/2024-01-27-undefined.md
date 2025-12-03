---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQAONNF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGE6EPeYfiHk5WmOu6PAdTc8rSafk4nfcd%2Bg8Z55X054AiAb1GUFwEgQd35sr9XFwzpcOyz1ipT5adth%2BqNKP%2BoPHir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMpfug4CC51X18V1AnKtwDMcKy2tHukIwSXkV0mlndNz6%2F3U1sHC21JvISVJKP9qmqFohv1ldFZPW63VwW2GYRuBy67Ayp06b6LQaETcIlvy7XkvdL9ZN7qXybcfHYXRbb5qna6nqXLINECbcl8eZUKZN9ZklM33d0OKra4NLR10nEirYwEf5AvJzq9fijBIqePlYB0EZj1nuDAQlJ919OPDK1O0ddHCy3icoRYiVyW5cK0U%2F%2Fu77LFBsv0AJen4Edb%2BgqJon9EhMDIrNFvdf%2BNqbrbNRTofbUpJ7KKOcD%2FFEs%2Bc8ryF42TbQjUx1gkSS9zLYx3pN%2BdH8qeHvvee9tMvhpcIaGdsUaQJcFzOY4BAdthuPh8qLeLYgb%2BW%2FZ2r4AbT%2FFuR%2BrFyXpQCylhsJQahYpL2DDyLXy3DwJlgFuDfkOmn41NUv1qjClteTceO47WMEvWiFRT9pl%2Bool8cRcAOKn0jj2YBk8Mx03Ie0zLPoJwlk7fudAUeDALe6ZBw7bjL%2FwNlO0W9aHEMr8%2FoEL%2F8OoRWBYelEZzpFQUAZMhckZAl52jbhbXy9VnSCfqRAFjrDJscAhtyF2ZkwdLMt3%2FetNZkIIIQWYdV0hBW5m3g4rU0wgxTf%2B9ZgXfmV2PM6D70HC%2FiLFSSpTzvww9f69yQY6pgGHzSDgg9ZlWPZCkN0%2FgCAiEalz6OdEf%2B9SO3MjXUOJc1X8d3iqIO3Nqq88DyNI83yONvSIhDGfrjPf1ZG0NNhRXG7a89b4Y2BTzxtpFPf5wLyDpUOUTegcUNUROT68IYR%2FODO%2Bh78y9hASP49BsFhCDXXAmbWzfgx2mRA31%2FSs1KXlClOdmQNnhW8FwhaNMdaT2wz7zEaOOPJvL%2FmxhW5JTIIObSLY&X-Amz-Signature=1cc0a543d2ae0cf0cafa41c2088f5a7feefda8f220aca5957be27417e2664e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQAONNF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGE6EPeYfiHk5WmOu6PAdTc8rSafk4nfcd%2Bg8Z55X054AiAb1GUFwEgQd35sr9XFwzpcOyz1ipT5adth%2BqNKP%2BoPHir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMpfug4CC51X18V1AnKtwDMcKy2tHukIwSXkV0mlndNz6%2F3U1sHC21JvISVJKP9qmqFohv1ldFZPW63VwW2GYRuBy67Ayp06b6LQaETcIlvy7XkvdL9ZN7qXybcfHYXRbb5qna6nqXLINECbcl8eZUKZN9ZklM33d0OKra4NLR10nEirYwEf5AvJzq9fijBIqePlYB0EZj1nuDAQlJ919OPDK1O0ddHCy3icoRYiVyW5cK0U%2F%2Fu77LFBsv0AJen4Edb%2BgqJon9EhMDIrNFvdf%2BNqbrbNRTofbUpJ7KKOcD%2FFEs%2Bc8ryF42TbQjUx1gkSS9zLYx3pN%2BdH8qeHvvee9tMvhpcIaGdsUaQJcFzOY4BAdthuPh8qLeLYgb%2BW%2FZ2r4AbT%2FFuR%2BrFyXpQCylhsJQahYpL2DDyLXy3DwJlgFuDfkOmn41NUv1qjClteTceO47WMEvWiFRT9pl%2Bool8cRcAOKn0jj2YBk8Mx03Ie0zLPoJwlk7fudAUeDALe6ZBw7bjL%2FwNlO0W9aHEMr8%2FoEL%2F8OoRWBYelEZzpFQUAZMhckZAl52jbhbXy9VnSCfqRAFjrDJscAhtyF2ZkwdLMt3%2FetNZkIIIQWYdV0hBW5m3g4rU0wgxTf%2B9ZgXfmV2PM6D70HC%2FiLFSSpTzvww9f69yQY6pgGHzSDgg9ZlWPZCkN0%2FgCAiEalz6OdEf%2B9SO3MjXUOJc1X8d3iqIO3Nqq88DyNI83yONvSIhDGfrjPf1ZG0NNhRXG7a89b4Y2BTzxtpFPf5wLyDpUOUTegcUNUROT68IYR%2FODO%2Bh78y9hASP49BsFhCDXXAmbWzfgx2mRA31%2FSs1KXlClOdmQNnhW8FwhaNMdaT2wz7zEaOOPJvL%2FmxhW5JTIIObSLY&X-Amz-Signature=6a12589418dcf2482a787e02ee6bed11f036704d00bc718af3b2486eb3a05027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

