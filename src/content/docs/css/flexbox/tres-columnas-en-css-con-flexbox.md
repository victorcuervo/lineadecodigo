---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBWGSFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6bb%2Bg2HLb5qN5zGvxL8Cyx1B4vMZJh4SwwWzfgqpNHAiBTqZa4ruP%2BoUTdXnunkr9QwEsMuOND68kspS4F8%2F0upiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLp%2FGyiY5qXIQS0b6KtwD0KOd%2BqHtsfpxoijj1ePd%2Fmdlc3y5EBvOyE8dFJlP9X5xvJxkpu%2BYGrcxf8rABk28dh8BvXziDYNYtxzzGagz8iTKLIu99KpGZq27DzsMwg3QsM8nw4aPPhjcSleQ8cfFbOXaYfDTaOinxi%2FIY2ivyXu4b4IFBqVWixxi2vot84MD0sYsDgUbO8A9yATVgfh%2Fb4Dl36LFDIOKR9Zn6GkHgk02r3naRhUCZzsl4XSEywdqffr%2Badq7e7n1uNXkExVkw2t1Svxr6DwQzb8BnFrW3CfVvS2x3eshtT2iwGG5XSSjCd7ri1H5MMmKrZSXc3yRHv%2FqUcuF1wRzb4FL5vicN4seF5uMbQ1Gl3boWq6P0bkgQ%2Bsm55PMo4WWJgPhcAC5cZh8XQ1hpULLbpgkflWWZTNBqxeXars10p6tURa7osyMARcyQdtJEEkWvRC2sk8Mn22%2FbbN9P59oW0%2FTujRUdfqX2SgGZjNzHt%2Bbe8Rr9ZDi3eYrfqMmYADXPpc7g3kAkwGPmpz8Z%2BkUWaTllSgx26dSl2%2Bbo9%2FcV%2B%2FfqV%2FwAPyAy0XzBTfU03i7vOCAHjBLUW7wx4e85MH5rZcuOPsKi2iX1cSHS63zirDfGVHKHDC9MzW9AlD498MGfjswsf7SyQY6pgFJvU54E1JeNU1%2FRpmnm2%2BdcflUgDeiP1HWUgbFcDJrqma2RysVTiv9VPZahRC5SGBy257qGDVOw7mo%2BdQxc1qyLyv49X3cxT2ArIlqSlc7iCHrVy5zuOFDGg53oqlSumfGwFoOesjpmUF65FOhtZuud4goraQLov%2BfNLRJCUfdNiT9XWhoRPkjU1OhzMbnKq2jzBBPVy3%2FCiGu5kUG1Hr9q8%2BVUMxF&X-Amz-Signature=56156b430d78907bf7f962931e4a1723301d5270d74e645391f558a4e1e889b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBWGSFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6bb%2Bg2HLb5qN5zGvxL8Cyx1B4vMZJh4SwwWzfgqpNHAiBTqZa4ruP%2BoUTdXnunkr9QwEsMuOND68kspS4F8%2F0upiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLp%2FGyiY5qXIQS0b6KtwD0KOd%2BqHtsfpxoijj1ePd%2Fmdlc3y5EBvOyE8dFJlP9X5xvJxkpu%2BYGrcxf8rABk28dh8BvXziDYNYtxzzGagz8iTKLIu99KpGZq27DzsMwg3QsM8nw4aPPhjcSleQ8cfFbOXaYfDTaOinxi%2FIY2ivyXu4b4IFBqVWixxi2vot84MD0sYsDgUbO8A9yATVgfh%2Fb4Dl36LFDIOKR9Zn6GkHgk02r3naRhUCZzsl4XSEywdqffr%2Badq7e7n1uNXkExVkw2t1Svxr6DwQzb8BnFrW3CfVvS2x3eshtT2iwGG5XSSjCd7ri1H5MMmKrZSXc3yRHv%2FqUcuF1wRzb4FL5vicN4seF5uMbQ1Gl3boWq6P0bkgQ%2Bsm55PMo4WWJgPhcAC5cZh8XQ1hpULLbpgkflWWZTNBqxeXars10p6tURa7osyMARcyQdtJEEkWvRC2sk8Mn22%2FbbN9P59oW0%2FTujRUdfqX2SgGZjNzHt%2Bbe8Rr9ZDi3eYrfqMmYADXPpc7g3kAkwGPmpz8Z%2BkUWaTllSgx26dSl2%2Bbo9%2FcV%2B%2FfqV%2FwAPyAy0XzBTfU03i7vOCAHjBLUW7wx4e85MH5rZcuOPsKi2iX1cSHS63zirDfGVHKHDC9MzW9AlD498MGfjswsf7SyQY6pgFJvU54E1JeNU1%2FRpmnm2%2BdcflUgDeiP1HWUgbFcDJrqma2RysVTiv9VPZahRC5SGBy257qGDVOw7mo%2BdQxc1qyLyv49X3cxT2ArIlqSlc7iCHrVy5zuOFDGg53oqlSumfGwFoOesjpmUF65FOhtZuud4goraQLov%2BfNLRJCUfdNiT9XWhoRPkjU1OhzMbnKq2jzBBPVy3%2FCiGu5kUG1Hr9q8%2BVUMxF&X-Amz-Signature=0e1b605f1474bf747f32f1df6209c2241789fb02b42e7d78e2cdefef12f9440e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

