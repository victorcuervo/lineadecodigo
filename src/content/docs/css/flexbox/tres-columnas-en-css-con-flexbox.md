---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DE4R6V7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfbTstHPG3AX5KC0gpafR1EPlbQm3Rq7MwQOkD5XulBAiA7CDZRv3N7toPtX78VFM7JXyA0wbLioACvXQfDflobtCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2TpLNgMWFsCc0pU3KtwDjvmfoU4asRWemJ9NtddYXiON3JoEOAhSc%2FY%2B1k7gEexq%2FqyGe9gVZTjmW4XDnpPy4jIiDGx5FhfmXhc%2BX2P6Lxavdp2vvhOfUyS%2FY2Q0%2Buqd1cQ5HSGtnBOugWrTUAA39SBPKUrMdBk281kqe2C4YAoXtlERTIXj8XYxJn3M42oUxDtsl1%2FkqT7BTtC5OtFzxki9eWFI2lBCE%2F2Slqt06f2N%2Fg64LXqv7nSfBsW7ohkWtnjduvxbW3qs8%2FsxDMY165GarmDC0adOCzzi2Ioe1KFzpcgEoQbdV%2Fz1JYoFajnRGFkuU8c4cd7GO6IrnbJ8kAxt4pd2rRnc2LBwsPcG5E6%2BIqo6S0lQlOC3t%2Fl1N2k4su7V46WKqBgj9f8OANCJUi0%2FoepbM%2F91Q0kDCc8qkL%2BVuYhBg9nj0SYvQEin3AfBLW97V%2B8%2FxJqDHOflfMFP8W2seIKJ7FP7Trsi5Rffn1kOVaBmLztVT0yevu9MRmmJFYCygzwTyvHdkctNAUPNnCzXlIj%2BOC%2FPZNjSE%2FBounaaEAS1CGjN7CERCzDsIM11O4ZrsncExkXAo5UIxDhpP%2BeIl5VJ%2B5w0TK9cfnj1w4Z3U7UCZnBxPIjfgeHTKA5aAZOlJ5%2BcQnSQZccwuLTcyQY6pgHv%2BOvOsU7li%2BFpFYZCubvstw8uP6D9WdHDwoOV1Z67ja7uajA9AL1UW%2Bwy4u6VgKoKTIOfZOdKFG7lmruLfDShHgmdGUofSkDMmwOQLO1SCtdKaYLtAfyzxlrf5pMGulPUbWbSidQiHJLm9XuOPdBOBFCjJwXpJ18vZJEURYiXFHN%2BVSGgtgjxEBRHzz%2F52%2BIzCHgSaTyAomWTVex9htp6AwKcZ2fJ&X-Amz-Signature=90a02fe08132e5fc2764cca86accb23acd4fb7ebe3c5adeb9fcdc1628adb35bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DE4R6V7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfbTstHPG3AX5KC0gpafR1EPlbQm3Rq7MwQOkD5XulBAiA7CDZRv3N7toPtX78VFM7JXyA0wbLioACvXQfDflobtCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2TpLNgMWFsCc0pU3KtwDjvmfoU4asRWemJ9NtddYXiON3JoEOAhSc%2FY%2B1k7gEexq%2FqyGe9gVZTjmW4XDnpPy4jIiDGx5FhfmXhc%2BX2P6Lxavdp2vvhOfUyS%2FY2Q0%2Buqd1cQ5HSGtnBOugWrTUAA39SBPKUrMdBk281kqe2C4YAoXtlERTIXj8XYxJn3M42oUxDtsl1%2FkqT7BTtC5OtFzxki9eWFI2lBCE%2F2Slqt06f2N%2Fg64LXqv7nSfBsW7ohkWtnjduvxbW3qs8%2FsxDMY165GarmDC0adOCzzi2Ioe1KFzpcgEoQbdV%2Fz1JYoFajnRGFkuU8c4cd7GO6IrnbJ8kAxt4pd2rRnc2LBwsPcG5E6%2BIqo6S0lQlOC3t%2Fl1N2k4su7V46WKqBgj9f8OANCJUi0%2FoepbM%2F91Q0kDCc8qkL%2BVuYhBg9nj0SYvQEin3AfBLW97V%2B8%2FxJqDHOflfMFP8W2seIKJ7FP7Trsi5Rffn1kOVaBmLztVT0yevu9MRmmJFYCygzwTyvHdkctNAUPNnCzXlIj%2BOC%2FPZNjSE%2FBounaaEAS1CGjN7CERCzDsIM11O4ZrsncExkXAo5UIxDhpP%2BeIl5VJ%2B5w0TK9cfnj1w4Z3U7UCZnBxPIjfgeHTKA5aAZOlJ5%2BcQnSQZccwuLTcyQY6pgHv%2BOvOsU7li%2BFpFYZCubvstw8uP6D9WdHDwoOV1Z67ja7uajA9AL1UW%2Bwy4u6VgKoKTIOfZOdKFG7lmruLfDShHgmdGUofSkDMmwOQLO1SCtdKaYLtAfyzxlrf5pMGulPUbWbSidQiHJLm9XuOPdBOBFCjJwXpJ18vZJEURYiXFHN%2BVSGgtgjxEBRHzz%2F52%2BIzCHgSaTyAomWTVex9htp6AwKcZ2fJ&X-Amz-Signature=91cb2f1b8b46b8bf240f778fd26b5b7f5894a585d3907fef39694443cfd0e186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

