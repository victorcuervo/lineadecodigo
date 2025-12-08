---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB22MID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFShaDBn%2FiDQaiA7ON7TDbaBp9lbUGQ%2BJPgjgDWtaiDBAiBJMgVSEngYW7sEFLV9kp%2BZnMQhrAG8y4EMZAEl420uJSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRBwx%2F4VnLVISWfjKtwD9osY8aO3jUsI2xxtawH8O1uZmvZjDPM2UPw%2Fj9AIKHauqqPESiVhFGf3dvADDG4yh%2BlmSx1n1thPCECVhjy3KO4qx7d5gir0t%2BkSCvbprVaj1thDvkDcRknvvQ3EQ7m01VOa%2FoeM6d5JSuvMvjFVsN4P%2FhordOYkSep6sjYg8WGp0Z6CV7PkbbeTFfx%2Ba8u0Zr5PLZEEuygIB%2BC5iKfNGg%2BEJrpjxJOelQuheFvTld2Lh0A7hJiJaWErbjsVcevVgfMpvs2NaJZHTrVrs4hH9F%2FZQoLAfCVM7TeL7dixQmgX7e%2BKNTF%2FgVXOxGlF5HO4gc%2B7HqgGHKVqzrdHKHRtdVUE8Y1uOFapeplk47yGKetrtsZC0YsJn%2BFT79OqVAl2%2BlEyM2DcNMPReevvzu1JdVaxYrW51Pz09UAvh86U2Bp7vVO%2BFgfesY06fB6V8VfbyIcKmY2ByjIlw0LIUJQpjBKUO0VNM6mFKAoRpyUAbdiStuvKuAHnK3dEacc7pXDXLc8tB6RufvRLCEs4KWyf3lRB1SXMpRt6MI78r5qPLgbGXocVAurP4lTHjfo67zwPCfWrV4tcWMMxC2BcYEnBr4OYYNOpChpqIXSCoCDuzzST88Koh2QQp%2BcdTSgwi%2B%2FYyQY6pgFvk0Zj3HknNZVczj3cNLWYhMZvLhpatS4q3ljRbAdR2JShnPOWXqUEI48QY8cqS0IgrA710HW%2F%2B4spPY7tkcJwWmWAxQj45qGc782MRZGt%2BNcKeJ7V03P34RMXzJqeN44uAtvf2XXucP0qM4zunx9jCEkVogapEEvv2yq%2Fr6Pp73Cr%2Ftwt6t4wG2b4vpFOO%2Fuf366sRv1sZIBfEPlLGjzVi8geCnrm&X-Amz-Signature=587a9749cfc9905868287b7af1ef6e35dc210f0d0e8f06189a15ca75f9e8d441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCB22MID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFShaDBn%2FiDQaiA7ON7TDbaBp9lbUGQ%2BJPgjgDWtaiDBAiBJMgVSEngYW7sEFLV9kp%2BZnMQhrAG8y4EMZAEl420uJSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRBwx%2F4VnLVISWfjKtwD9osY8aO3jUsI2xxtawH8O1uZmvZjDPM2UPw%2Fj9AIKHauqqPESiVhFGf3dvADDG4yh%2BlmSx1n1thPCECVhjy3KO4qx7d5gir0t%2BkSCvbprVaj1thDvkDcRknvvQ3EQ7m01VOa%2FoeM6d5JSuvMvjFVsN4P%2FhordOYkSep6sjYg8WGp0Z6CV7PkbbeTFfx%2Ba8u0Zr5PLZEEuygIB%2BC5iKfNGg%2BEJrpjxJOelQuheFvTld2Lh0A7hJiJaWErbjsVcevVgfMpvs2NaJZHTrVrs4hH9F%2FZQoLAfCVM7TeL7dixQmgX7e%2BKNTF%2FgVXOxGlF5HO4gc%2B7HqgGHKVqzrdHKHRtdVUE8Y1uOFapeplk47yGKetrtsZC0YsJn%2BFT79OqVAl2%2BlEyM2DcNMPReevvzu1JdVaxYrW51Pz09UAvh86U2Bp7vVO%2BFgfesY06fB6V8VfbyIcKmY2ByjIlw0LIUJQpjBKUO0VNM6mFKAoRpyUAbdiStuvKuAHnK3dEacc7pXDXLc8tB6RufvRLCEs4KWyf3lRB1SXMpRt6MI78r5qPLgbGXocVAurP4lTHjfo67zwPCfWrV4tcWMMxC2BcYEnBr4OYYNOpChpqIXSCoCDuzzST88Koh2QQp%2BcdTSgwi%2B%2FYyQY6pgFvk0Zj3HknNZVczj3cNLWYhMZvLhpatS4q3ljRbAdR2JShnPOWXqUEI48QY8cqS0IgrA710HW%2F%2B4spPY7tkcJwWmWAxQj45qGc782MRZGt%2BNcKeJ7V03P34RMXzJqeN44uAtvf2XXucP0qM4zunx9jCEkVogapEEvv2yq%2Fr6Pp73Cr%2Ftwt6t4wG2b4vpFOO%2Fuf366sRv1sZIBfEPlLGjzVi8geCnrm&X-Amz-Signature=e2b1d9293ec2d47e66b1555b22554d72ad216f31317ace471408cdb1373c290e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

