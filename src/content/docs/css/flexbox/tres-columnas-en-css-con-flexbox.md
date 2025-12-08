---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5MHBWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2BJemSSwpprP2NF38SAWki1yGWVMDGsYSXJqCWFm65QIgXN%2BJjZ1BXyZZoGV7qOr8%2F9N5qiAvbzJnVuDlls6HKAAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPILA6%2BQ8foKkqSJ7CrcAw53j0Af1lLYfKy7K0XNqe3ZFXqcYzLnFQKtRYszEA4GDKtrK2RVIi1Chu7vh1WitkSvAw1vsjjNxMRCxDP2sdlZxUngDqI2JcFakAycd57ZIEA6J8GwYH7k21Fj9m0JZGltxLRu4o57ad1q30keaAiKcJlxanRscnwJYBMFhsCsGOQfY2T3MHUlu9WJcLJHIEo%2B%2FfQAFgj5%2FqwvVm%2FX5T3TT%2BfSR8qXDpT6z5Et%2BMHqqJrIeHT7Kd%2BWdDY6wox%2FYSashkvQDgGLhZYVXptjBHDQPJ0BfTSpP4e1HB3GL4OXBkCY44O2aY4i677Iswc11LI79DI%2Fq3%2FLTkTFmEx7SMcDAD%2BoxdRtMKXnM7nOUXU9c5xd9XtR6oe35c%2FoHIqP19OpATd9TlUJjjPl1GdLpIKQk1xJFMSoGcY2FiHORTjiMA%2F8o96MkBQK5ibcKRmRpLhPn9Ij9xX65JDoCI6woKBgHH8QL5VubSsacUQvBj3p%2FVtTqCck5V9nO94uGIp6xa6oaEcg13w1pPfOFMFwMKlCzo5mkbQMJzxsyVu8cMCMCIOc1eOtbV%2Bivb7VYTX8FJDO7ySr%2BVncryd539xN8qlE0m0b6VH7C2li%2BFM1w1DppSK7j3FIAu%2F2AlZKMOSh3ckGOqUBs2oL51qLTaSDWyb7IepmSj00jb2dpn%2Bc1ILKSNdivcMyrkFhIGj7bBgKJV8Aot0ianBfgJS3zo%2BRv72ZyMHNOVfMoR0ZzGTWNL4TDAEMhilLX3jnlVWzoOpl2QVBfyod1zpAVyN1U9reL%2BhABWwfI8PEjpft14f4bcUIDkAeivKUOVp0iAt3k0Y7IldNulmhLbmkuSFMWJiJGjA3gGvfeB40ytQx&X-Amz-Signature=cbd29cc8690c9e2566d3a02078866e625dcd0e9223698a2e893f3008edd4e919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5MHBWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2BJemSSwpprP2NF38SAWki1yGWVMDGsYSXJqCWFm65QIgXN%2BJjZ1BXyZZoGV7qOr8%2F9N5qiAvbzJnVuDlls6HKAAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPILA6%2BQ8foKkqSJ7CrcAw53j0Af1lLYfKy7K0XNqe3ZFXqcYzLnFQKtRYszEA4GDKtrK2RVIi1Chu7vh1WitkSvAw1vsjjNxMRCxDP2sdlZxUngDqI2JcFakAycd57ZIEA6J8GwYH7k21Fj9m0JZGltxLRu4o57ad1q30keaAiKcJlxanRscnwJYBMFhsCsGOQfY2T3MHUlu9WJcLJHIEo%2B%2FfQAFgj5%2FqwvVm%2FX5T3TT%2BfSR8qXDpT6z5Et%2BMHqqJrIeHT7Kd%2BWdDY6wox%2FYSashkvQDgGLhZYVXptjBHDQPJ0BfTSpP4e1HB3GL4OXBkCY44O2aY4i677Iswc11LI79DI%2Fq3%2FLTkTFmEx7SMcDAD%2BoxdRtMKXnM7nOUXU9c5xd9XtR6oe35c%2FoHIqP19OpATd9TlUJjjPl1GdLpIKQk1xJFMSoGcY2FiHORTjiMA%2F8o96MkBQK5ibcKRmRpLhPn9Ij9xX65JDoCI6woKBgHH8QL5VubSsacUQvBj3p%2FVtTqCck5V9nO94uGIp6xa6oaEcg13w1pPfOFMFwMKlCzo5mkbQMJzxsyVu8cMCMCIOc1eOtbV%2Bivb7VYTX8FJDO7ySr%2BVncryd539xN8qlE0m0b6VH7C2li%2BFM1w1DppSK7j3FIAu%2F2AlZKMOSh3ckGOqUBs2oL51qLTaSDWyb7IepmSj00jb2dpn%2Bc1ILKSNdivcMyrkFhIGj7bBgKJV8Aot0ianBfgJS3zo%2BRv72ZyMHNOVfMoR0ZzGTWNL4TDAEMhilLX3jnlVWzoOpl2QVBfyod1zpAVyN1U9reL%2BhABWwfI8PEjpft14f4bcUIDkAeivKUOVp0iAt3k0Y7IldNulmhLbmkuSFMWJiJGjA3gGvfeB40ytQx&X-Amz-Signature=86df011b11a67760d5cbcece1c4497af433ce89461011c73edf67f7153487c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

