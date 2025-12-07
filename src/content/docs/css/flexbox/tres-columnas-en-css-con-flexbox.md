---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG2O6RV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9XcG838OLmZ1424o5JVw4KEoOiho8RzKdJ%2Behkz95QAiBJniM4rLEVd%2B%2Fzg7G%2Bvqe%2BgFbccLnOFtONojmyioyfZiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRprF60KGdwPt3OpKtwDF1cGFj%2FTZe8X2BJCivbCO1zk6SWWlX7g5TzwxD1M0REsQwfmJkywKQqfmHRWWAQ29QR9B8mKqVQ9yB5KVVhN68PeVniuhZ3G1K3pdIeyCsQ2lO%2B%2FYmb0ShL8NoKlcrysRFfUFVJKBSYlWOFiikx4YrOyF951zagmBvDAM7De0rfuDD1KL6rvdh4q4azWKIIFWYQioA26JWN1DYSa4ogjI0i5n3IJbIm2xaG4Vy5oayNEanPGSwqs5jQGUQinf3QhAkbsS%2FvdUYPaGnj%2BoQMWq1ZANxXlZwqlNr5XKBy2LAqJ9H9AA%2FiDuEWIhz60lSA8DBOMs1t8JHuO%2F5YucMNdgenpGMdLOPnEioW4QYAkgkT5p20jPKbVFQR8qZp2aaphOLYMdaT5YkSmgIDgszECLy0%2B9DL7kqqVCwMssSAKSBAiQMa66JFGZ8yT%2FdlCtEkf1JKYjuvHXn59dyDyafb8IXnDjcQZfmNGJIWwyYGLpm2bF7jwKnaIlapU1FChLpSWXvhAmllmOLljUiTPSxjmd20HMU8I0FV%2F2Y6uIL1bgpQXuYk7YL2%2F8lNcre6G%2Bx%2FGbIjCCWh4bJrBaekPazEXrAL%2BGQe5xQLCB2uuArqQvWxS6bJblmVkLbefyF4w8%2F3SyQY6pgF1z7BjhFkt9244hgh%2Fkl2zbMenKrcBF7YYEgzkfO%2Bo%2FT0iXeF60d%2BHYvVCZLs4T6H%2BqCsOflXGI5GfVc%2BGgrgK3Kz8PRdgQu6cEOHyVIm9hMp49%2FyBtlynnAoLltHE%2FIIepOkP3%2FNJFhcgf5UlRJIVLmzCPxI57YyXcFe3aec8p0IZvZA%2FmVu%2B3aiP175EgwugeWMfMgoYtaRcUu7BU1AmD08sqsIu&X-Amz-Signature=d28d6172dc56fc3a8c3eeea17991782da10f8315188720712664691640982bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG2O6RV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9XcG838OLmZ1424o5JVw4KEoOiho8RzKdJ%2Behkz95QAiBJniM4rLEVd%2B%2Fzg7G%2Bvqe%2BgFbccLnOFtONojmyioyfZiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRprF60KGdwPt3OpKtwDF1cGFj%2FTZe8X2BJCivbCO1zk6SWWlX7g5TzwxD1M0REsQwfmJkywKQqfmHRWWAQ29QR9B8mKqVQ9yB5KVVhN68PeVniuhZ3G1K3pdIeyCsQ2lO%2B%2FYmb0ShL8NoKlcrysRFfUFVJKBSYlWOFiikx4YrOyF951zagmBvDAM7De0rfuDD1KL6rvdh4q4azWKIIFWYQioA26JWN1DYSa4ogjI0i5n3IJbIm2xaG4Vy5oayNEanPGSwqs5jQGUQinf3QhAkbsS%2FvdUYPaGnj%2BoQMWq1ZANxXlZwqlNr5XKBy2LAqJ9H9AA%2FiDuEWIhz60lSA8DBOMs1t8JHuO%2F5YucMNdgenpGMdLOPnEioW4QYAkgkT5p20jPKbVFQR8qZp2aaphOLYMdaT5YkSmgIDgszECLy0%2B9DL7kqqVCwMssSAKSBAiQMa66JFGZ8yT%2FdlCtEkf1JKYjuvHXn59dyDyafb8IXnDjcQZfmNGJIWwyYGLpm2bF7jwKnaIlapU1FChLpSWXvhAmllmOLljUiTPSxjmd20HMU8I0FV%2F2Y6uIL1bgpQXuYk7YL2%2F8lNcre6G%2Bx%2FGbIjCCWh4bJrBaekPazEXrAL%2BGQe5xQLCB2uuArqQvWxS6bJblmVkLbefyF4w8%2F3SyQY6pgF1z7BjhFkt9244hgh%2Fkl2zbMenKrcBF7YYEgzkfO%2Bo%2FT0iXeF60d%2BHYvVCZLs4T6H%2BqCsOflXGI5GfVc%2BGgrgK3Kz8PRdgQu6cEOHyVIm9hMp49%2FyBtlynnAoLltHE%2FIIepOkP3%2FNJFhcgf5UlRJIVLmzCPxI57YyXcFe3aec8p0IZvZA%2FmVu%2B3aiP175EgwugeWMfMgoYtaRcUu7BU1AmD08sqsIu&X-Amz-Signature=7a77f7531fef4438d2d53423b6def84303cd55a8696c8ea8e7bc525436291034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

