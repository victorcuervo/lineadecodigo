---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJYIWA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAhpTb%2FxwkJf4j3fVlTpEsNW56oyXsN%2FHbxor6PTrZ1AIgGt%2BMPRzkYPa%2BMn79q%2BiAYc%2B%2B94WjNtB%2FqDn%2FsVfoh14qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOo6gqRL0bkbi6Q%2BiCrcAxIJodp%2BYqoBdPs0TLADQBK0SkbeH4lN3BAaZaCwIX2rpafXTvXe0bk8cuDv2ynCnEKZyyQGitjnCaJFbRLD9fkkrUxivTn2kV27%2BBqcAAbshxEsQJdtgIg9cUf2koEswLxVPI1%2ByLQi3wRTPK3f%2FTtYGWBopUsiJU5ulMXc2Luup4jC4DLdqik%2F7VDWw3btl0cQjgi548LoKxndwN5vD3ZUIFmkypIYsXPygJtZikUJbz984x57UNSX4TBvTmdJogD07CXuEaFat%2BchZo4wSp7EHt6KyrWS6LL6LdAp%2F72w9pTNc5e2TY9ON620nJeOp53g9LR5q%2FrEe%2FnqPRoGjzhln%2FJbjak1RPuPZzw0v%2FX9Pez4CMHwayIRTgYiDqzFZi9ldgPKCt6%2FbF%2FWbzG0sD%2BSCTAY7MSv5UjdlymQ8TqR36X4MdcR9j%2F7UQ7rAq2OI85jKIdiqKzek16egDNMCVSnYE0VFl02snOk1c3KtbeWyDegbZj6pFbE4l9qRsb8OJOIi36H3HSY4mvOVNUghXU53fO030%2FCOtecQCXpfooqqHXeYZ9CnC1A9Vc1N%2FcVNR4quDOQrKFL2fGD6mDakCExU%2FdwFjmdkv1kV2XlFyw9Kc4UMY38%2BnvSadJ%2BMM211skGOqUBt42uMy2r8NHJIyROChrGDsS6MKjEgbF8gMEice1L%2BXHRJneL9GUXnBuxscVKdkmaKxqTq1nB2svYwOl9N3j%2BkcRMZn0TVKeCZlWuzc9%2Bs5I5tp2fOd3Rv%2FsSXqCJjeMr28EjH8k%2Bck1Os1JNf4XKHUwrDFXI5IQzaSN02viN8T5bivwR6dp%2BvdQ8nzRI%2BdO8ykuNRuvqiVMuEHjSQvgN2Qqnru%2Bs&X-Amz-Signature=3c620a7c0700d85ed75ea5ef7a0d1671752019382aff89fb4526f4bb11b269a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJYIWA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAhpTb%2FxwkJf4j3fVlTpEsNW56oyXsN%2FHbxor6PTrZ1AIgGt%2BMPRzkYPa%2BMn79q%2BiAYc%2B%2B94WjNtB%2FqDn%2FsVfoh14qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOo6gqRL0bkbi6Q%2BiCrcAxIJodp%2BYqoBdPs0TLADQBK0SkbeH4lN3BAaZaCwIX2rpafXTvXe0bk8cuDv2ynCnEKZyyQGitjnCaJFbRLD9fkkrUxivTn2kV27%2BBqcAAbshxEsQJdtgIg9cUf2koEswLxVPI1%2ByLQi3wRTPK3f%2FTtYGWBopUsiJU5ulMXc2Luup4jC4DLdqik%2F7VDWw3btl0cQjgi548LoKxndwN5vD3ZUIFmkypIYsXPygJtZikUJbz984x57UNSX4TBvTmdJogD07CXuEaFat%2BchZo4wSp7EHt6KyrWS6LL6LdAp%2F72w9pTNc5e2TY9ON620nJeOp53g9LR5q%2FrEe%2FnqPRoGjzhln%2FJbjak1RPuPZzw0v%2FX9Pez4CMHwayIRTgYiDqzFZi9ldgPKCt6%2FbF%2FWbzG0sD%2BSCTAY7MSv5UjdlymQ8TqR36X4MdcR9j%2F7UQ7rAq2OI85jKIdiqKzek16egDNMCVSnYE0VFl02snOk1c3KtbeWyDegbZj6pFbE4l9qRsb8OJOIi36H3HSY4mvOVNUghXU53fO030%2FCOtecQCXpfooqqHXeYZ9CnC1A9Vc1N%2FcVNR4quDOQrKFL2fGD6mDakCExU%2FdwFjmdkv1kV2XlFyw9Kc4UMY38%2BnvSadJ%2BMM211skGOqUBt42uMy2r8NHJIyROChrGDsS6MKjEgbF8gMEice1L%2BXHRJneL9GUXnBuxscVKdkmaKxqTq1nB2svYwOl9N3j%2BkcRMZn0TVKeCZlWuzc9%2Bs5I5tp2fOd3Rv%2FsSXqCJjeMr28EjH8k%2Bck1Os1JNf4XKHUwrDFXI5IQzaSN02viN8T5bivwR6dp%2BvdQ8nzRI%2BdO8ykuNRuvqiVMuEHjSQvgN2Qqnru%2Bs&X-Amz-Signature=be4d0233a8bc7c4200e4602ded2f0575a194fa3681053551b3417e77d487ad81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

