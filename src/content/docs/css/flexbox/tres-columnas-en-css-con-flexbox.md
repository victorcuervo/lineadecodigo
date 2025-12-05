---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJ52CGK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9KFt%2BxBSYC5wg8H9z4ZmyBj4oIJDEZzsX0wI3TbZqTAiEAlN2UBgcnEKSD2QA8K%2Bevqv%2FPgQEdQgI%2FxxA%2B%2BaV8Pl4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDM3KfTEVdNqD10f2IyrcAzlkE3eNJPctDEeUPQ6HHsnvI6zDLfW28YNhGP2tQsXOc353dwywZoKuMWwOkEAJ4wyrZ3cb4y2GGLcuL2LJY4CL1g0d87sUn6%2BOImjawNZYXYSiLXsONC1liI33zmdgXA%2BaL3pGl1kRNntlfZ3%2FkyR2v%2FUsHxIzPIsc13R%2BLIF5rqLKFQQXjsgRUlRYh6qMhX4ZXue5jNmulXKbc5EjIi5A4CWP24RTO1H1nNnP24YunN1WYqkOIX%2BuzEnh%2FYB%2FMt92cPPRib82K8sn3TTrydAA%2BNW5iMDRlZ%2BBeEtw5kUVLQiKnfRumWjWd4ApgwWdInUkH8HoENXU8zTzBACXK611Dq5c4HrDucFtDnkRqi9l%2B6z4LENpZg%2FpGDYcILOzweUxBatv1qajQora4VOwvUFUZT87R8JNoy32Yn743Kyr2C%2Bd3%2F6txCyzttyuGScPU4MR25p8dmnEnJT5%2Fz3M%2BTB6LAH4BHBZ6YNq0qfUK6noupjCoioP4dE0fMYy5PINUCjBn5YFWvpToel4hf5Z1P5YUz2arCA7p6xG6zyg6D93SYLA4h85euvmQCPjLe4U2d%2BneLnVK6fqGEDmmJVAz%2Fhgq1ZjfAVsapdt3GCB6%2F9C1nmYybXeKBUHT2ACMIbmy8kGOqUBwXlYuZVYHJdhjqFIjYkXl9DxIgaDLu6W4seLVirT8oFq%2FG6OlAQ0UtMJcxYVVFaZzzy8fDluDKog2pXHkROrSnVKWgpvaKC5FyTcmyMS%2B9btkF%2FUHymnbfv4q0C6V%2FwciGM19FxjklVPp05onUOEIINhNsVsaLy1ri9eKZlky%2FwPc0QTvVdiS3Wvg7ENPEpNvrVi3Azry1PALej%2BZgfKh%2F905gBG&X-Amz-Signature=7c0b44b6f5b580e6f2ae8bff126fe49028a48e57f20bd608a21a7d74c5c8b001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJ52CGK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9KFt%2BxBSYC5wg8H9z4ZmyBj4oIJDEZzsX0wI3TbZqTAiEAlN2UBgcnEKSD2QA8K%2Bevqv%2FPgQEdQgI%2FxxA%2B%2BaV8Pl4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDM3KfTEVdNqD10f2IyrcAzlkE3eNJPctDEeUPQ6HHsnvI6zDLfW28YNhGP2tQsXOc353dwywZoKuMWwOkEAJ4wyrZ3cb4y2GGLcuL2LJY4CL1g0d87sUn6%2BOImjawNZYXYSiLXsONC1liI33zmdgXA%2BaL3pGl1kRNntlfZ3%2FkyR2v%2FUsHxIzPIsc13R%2BLIF5rqLKFQQXjsgRUlRYh6qMhX4ZXue5jNmulXKbc5EjIi5A4CWP24RTO1H1nNnP24YunN1WYqkOIX%2BuzEnh%2FYB%2FMt92cPPRib82K8sn3TTrydAA%2BNW5iMDRlZ%2BBeEtw5kUVLQiKnfRumWjWd4ApgwWdInUkH8HoENXU8zTzBACXK611Dq5c4HrDucFtDnkRqi9l%2B6z4LENpZg%2FpGDYcILOzweUxBatv1qajQora4VOwvUFUZT87R8JNoy32Yn743Kyr2C%2Bd3%2F6txCyzttyuGScPU4MR25p8dmnEnJT5%2Fz3M%2BTB6LAH4BHBZ6YNq0qfUK6noupjCoioP4dE0fMYy5PINUCjBn5YFWvpToel4hf5Z1P5YUz2arCA7p6xG6zyg6D93SYLA4h85euvmQCPjLe4U2d%2BneLnVK6fqGEDmmJVAz%2Fhgq1ZjfAVsapdt3GCB6%2F9C1nmYybXeKBUHT2ACMIbmy8kGOqUBwXlYuZVYHJdhjqFIjYkXl9DxIgaDLu6W4seLVirT8oFq%2FG6OlAQ0UtMJcxYVVFaZzzy8fDluDKog2pXHkROrSnVKWgpvaKC5FyTcmyMS%2B9btkF%2FUHymnbfv4q0C6V%2FwciGM19FxjklVPp05onUOEIINhNsVsaLy1ri9eKZlky%2FwPc0QTvVdiS3Wvg7ENPEpNvrVi3Azry1PALej%2BZgfKh%2F905gBG&X-Amz-Signature=7ee0b4ef8b4e2089fbdef0825bc4224025aaf284621e0ed81823edf4cb291cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

