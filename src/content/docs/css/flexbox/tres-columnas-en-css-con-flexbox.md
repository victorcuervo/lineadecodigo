---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4NBF6L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6Yr%2BFrXbHKnxCdkxwxAtr099%2BuLktlJ9YeOycRjRV%2FAiBHFzXBy73IB%2FwzcyMzlxuIb1wXUechTriiOgXn7rjDBCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMA0ULXLKkxsGHsMYIKtwDKUzmjolfSrHBS6FZMOpqE9oT1e1YUHEde1e0B1QVScBLyPGsdXCxv1hqEHYsPufauiC5t%2BoCAJVabE3mt1hKXYvk4mBFEFh4mPOIpYuj4IH%2BkehhDrkCsLvTJ5XmlCmciEeleN8Hmf8TBrfN9uyKlB17LFUDx%2Fy62kSNb3bNpwm5gqHwBVEzcBrEGDx7cVjXWrH3mhZYaMz%2FGHJSmwA21nuGJJqeV6g1yDiHieHNCyTJbzTTC0QXHh7tUybiV7DOYxgcCznVFAe6Wd0alQWJX3SbymtKcyliKAVqT3sWwQeggxBOxJEoeL3vJQcnUba5dyBnRRr6v8TyuMg04nqLVF%2BgX%2F2A%2BNOS7d0jDWYgYg39oy1FvWB26vgP2u%2B1CFvb1fyZbCaXaHrU1ghSVRTR8qNQCNqg%2FulFgUkioE%2FIYmPjcd7tTIa%2FMPoivKbDpnyBZxY5s2unh9Cr0fL9EnjaJfW9%2FCD1lQX64u8AEEJ1AHs%2BccHFWRhVJ%2BvhuKYtOqLRVw8t7Yh8neQlPbFmnIsMkaKfeMAUSOKJopRZUUppTOiwk0vUpUC%2F1BWEjuFwOQhUh8V8Gwh6Jojp5IGvqv212LsE9u2EqRpbaKE6BH7nkI8WsQ9rjEtCX%2BnNbWQwu9PSyQY6pgGgdJp9%2F8xKkuDESlbaAYPdjjVvmPjFQPkmKp5pI%2FxAOrLqFPPUK1rQPerI0vpkJu8n4JMjY1l3HR6FEQJygRplxhL8ckaJBWsOYcqa3vWFsik52YPYgIupbIjw5Un7FnaR4ztxvP24bC%2But3VBjRjoigBRBE6Be4bmiC%2FcnKaufi5SkaZpMhGnklRMDN16%2BL6gj23SfNR7NjUjxLwtug18aWv8Cz1f&X-Amz-Signature=b4fe5b41059868ab481bfbcfcbfc0f9661acef78a110232da3d23c7b209eed21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4NBF6L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6Yr%2BFrXbHKnxCdkxwxAtr099%2BuLktlJ9YeOycRjRV%2FAiBHFzXBy73IB%2FwzcyMzlxuIb1wXUechTriiOgXn7rjDBCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMA0ULXLKkxsGHsMYIKtwDKUzmjolfSrHBS6FZMOpqE9oT1e1YUHEde1e0B1QVScBLyPGsdXCxv1hqEHYsPufauiC5t%2BoCAJVabE3mt1hKXYvk4mBFEFh4mPOIpYuj4IH%2BkehhDrkCsLvTJ5XmlCmciEeleN8Hmf8TBrfN9uyKlB17LFUDx%2Fy62kSNb3bNpwm5gqHwBVEzcBrEGDx7cVjXWrH3mhZYaMz%2FGHJSmwA21nuGJJqeV6g1yDiHieHNCyTJbzTTC0QXHh7tUybiV7DOYxgcCznVFAe6Wd0alQWJX3SbymtKcyliKAVqT3sWwQeggxBOxJEoeL3vJQcnUba5dyBnRRr6v8TyuMg04nqLVF%2BgX%2F2A%2BNOS7d0jDWYgYg39oy1FvWB26vgP2u%2B1CFvb1fyZbCaXaHrU1ghSVRTR8qNQCNqg%2FulFgUkioE%2FIYmPjcd7tTIa%2FMPoivKbDpnyBZxY5s2unh9Cr0fL9EnjaJfW9%2FCD1lQX64u8AEEJ1AHs%2BccHFWRhVJ%2BvhuKYtOqLRVw8t7Yh8neQlPbFmnIsMkaKfeMAUSOKJopRZUUppTOiwk0vUpUC%2F1BWEjuFwOQhUh8V8Gwh6Jojp5IGvqv212LsE9u2EqRpbaKE6BH7nkI8WsQ9rjEtCX%2BnNbWQwu9PSyQY6pgGgdJp9%2F8xKkuDESlbaAYPdjjVvmPjFQPkmKp5pI%2FxAOrLqFPPUK1rQPerI0vpkJu8n4JMjY1l3HR6FEQJygRplxhL8ckaJBWsOYcqa3vWFsik52YPYgIupbIjw5Un7FnaR4ztxvP24bC%2But3VBjRjoigBRBE6Be4bmiC%2FcnKaufi5SkaZpMhGnklRMDN16%2BL6gj23SfNR7NjUjxLwtug18aWv8Cz1f&X-Amz-Signature=59375b9879446fc43a42f69276755ef7be5a5148d24e2cead6c9c19d0908883a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

