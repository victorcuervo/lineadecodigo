---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FXTWTJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaOv9UPq9i9guConW8hgpXE8RDWuJ0sxnGWvX6316tDAiASjx6PZ7FSH%2Fhy%2FlCMhmjoGv6HXg7Ifl3r3VOmg9qtGCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaY7D936TfaXwh2yiKtwDqwQaCyO63e%2B4rUR9zu8uKFByiLkODrbvmsTDl%2Bj%2BEjneLWhppKXLg4IKQXMvDG4BKIIqIuI1zba2rKc%2FD5psZxi20%2BqzD1DzwqVxbtR7gXDSBE8UoFjGgv2hzRT2AduKGK8glkuBJmp5iAA%2BSLQobCZsFIZtDQiUiskJ%2FJgHmWhvA1%2FwrERN86czF1bgfkFeZyBRYsy%2Bz%2BZjQwz6e09UgqRiiqLk0Mdvt8GILSR7ou1WM2%2FrfinOUSBFEoXOvj3QfUIOjkjP%2B%2BsL%2BTPEw8Iev2l4bl7v8suHXlxHLTSwDb9kXLhzfvvPRmY73KtwYCyQQKqYPSby%2BthbX%2F0CtwAMKXs%2FaJCeOQFmDxlRc%2FCUuat5Y3iqzMT1T3jEPCIG7SDoSRzpJjo6ycbA0pmZo%2BaZE8YIesXpIuS7o1E9o4AFL4OrsIc9JOHYRK%2FHbkl1S%2FqcBVaMpjBsLIAmrsnMs%2BACfsCHaGKdg%2FawDdPUWLt9Z8dCOFj8%2B%2BLtaSv1SpbUB2ZhR881%2Bqz61g4GPalxgvEAYZGSqGTCDqJf5HArvFcyNfZPWW09uczxzdgbjCVQfK6lgwo8YThnQvFq%2BKW%2BDHw32F3dgEJkzLAHQsMYsRmw4LhotFNU%2BsZWWgCSI9YwgpzUyQY6pgHdhGvDfdT822QGwVUIKBC6jVq5UPGI7ssfn4yuGNe8gjfDluMWI2aEsoKAmwjtmeCo3sTws3O2EZdkuZFklfSCjbAEl5%2FnTxW8KS%2By9H%2BVTu7zrrKG%2BI1%2BbcfBWH3Q%2BCpXs2E2RWIFst3axU2glXsDYZuml7M4LF21tRjHxtG8hlb5oFbyXNK1jXeXJABdffMf1n8IxWSP2xtPr5cWF8ubiz08Dsdw&X-Amz-Signature=0562bb1dee66efe5db9b373097bb4565fd4e61453f24dd5120fbdd41149cd502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FXTWTJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaOv9UPq9i9guConW8hgpXE8RDWuJ0sxnGWvX6316tDAiASjx6PZ7FSH%2Fhy%2FlCMhmjoGv6HXg7Ifl3r3VOmg9qtGCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaY7D936TfaXwh2yiKtwDqwQaCyO63e%2B4rUR9zu8uKFByiLkODrbvmsTDl%2Bj%2BEjneLWhppKXLg4IKQXMvDG4BKIIqIuI1zba2rKc%2FD5psZxi20%2BqzD1DzwqVxbtR7gXDSBE8UoFjGgv2hzRT2AduKGK8glkuBJmp5iAA%2BSLQobCZsFIZtDQiUiskJ%2FJgHmWhvA1%2FwrERN86czF1bgfkFeZyBRYsy%2Bz%2BZjQwz6e09UgqRiiqLk0Mdvt8GILSR7ou1WM2%2FrfinOUSBFEoXOvj3QfUIOjkjP%2B%2BsL%2BTPEw8Iev2l4bl7v8suHXlxHLTSwDb9kXLhzfvvPRmY73KtwYCyQQKqYPSby%2BthbX%2F0CtwAMKXs%2FaJCeOQFmDxlRc%2FCUuat5Y3iqzMT1T3jEPCIG7SDoSRzpJjo6ycbA0pmZo%2BaZE8YIesXpIuS7o1E9o4AFL4OrsIc9JOHYRK%2FHbkl1S%2FqcBVaMpjBsLIAmrsnMs%2BACfsCHaGKdg%2FawDdPUWLt9Z8dCOFj8%2B%2BLtaSv1SpbUB2ZhR881%2Bqz61g4GPalxgvEAYZGSqGTCDqJf5HArvFcyNfZPWW09uczxzdgbjCVQfK6lgwo8YThnQvFq%2BKW%2BDHw32F3dgEJkzLAHQsMYsRmw4LhotFNU%2BsZWWgCSI9YwgpzUyQY6pgHdhGvDfdT822QGwVUIKBC6jVq5UPGI7ssfn4yuGNe8gjfDluMWI2aEsoKAmwjtmeCo3sTws3O2EZdkuZFklfSCjbAEl5%2FnTxW8KS%2By9H%2BVTu7zrrKG%2BI1%2BbcfBWH3Q%2BCpXs2E2RWIFst3axU2glXsDYZuml7M4LF21tRjHxtG8hlb5oFbyXNK1jXeXJABdffMf1n8IxWSP2xtPr5cWF8ubiz08Dsdw&X-Amz-Signature=f5247000d79f802173a71f2b4e5454539542c6b0ce8fb98016631e511c253dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

