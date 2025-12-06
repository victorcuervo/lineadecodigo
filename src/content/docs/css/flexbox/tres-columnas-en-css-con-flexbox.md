---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SIFI7F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9fFd%2BEwTrKizx7TIfdLCujgXWJyftyNuvfpFKqP%2FqqAIgf0ZV3ctiBUgVg%2Fn%2BfSJNsMnzkYpbRlgupYNPrFK0YxQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOlcyhI8695ZizmwiCrcA0JfK0KyxPx9INAkOvelJztSprgXltyo5hPcV5EwubeoX2ijOYx0Mk3%2Bf71rjIBK1%2BxqzB0xaHusURybaJXhibtr2LMcEXesGUszpm12MdU%2FMcRG%2FXN7aJ7%2Bw8Xpr9ebuMbX4j4%2FTpvzeYKl19AjYv4%2BdU8Ozh5XL%2BKd%2BfDwhXAsnZQL%2FJkXvXxMww%2F0zapZhI7gT72ylAxytOlITZuiYhT5vlTlEmbKya6BXodXhJtOqmthzfzlarjbFX75AMxlI5IXahU8uHrzFUeQrabmA88zHB5ZnhTUJbH3xVP%2F3JEtPiDgHRP9lUrg8tOogExtGhcBpsf578wEO6O4EvRGOKLS8%2FXy6pYaW%2BWil6SBVwwrfmeBL9iEmAQQCy5u0Ik6IaF0peeDOTvxB%2FRAyvkgvVdw8roxuy4XG49LLQoPwQZAa1PMOu43KwxXmfegI%2F%2FFochbPPeLvSNN0K%2FW8bqaUqXJwzUFh%2BzZoUDEsqvhQmttCEThmagVGXeRikEzghQNhIw3IGAtZNPJGSdf%2BR846Q1x2JEQ%2Fr3riMFwTcpVvxIDFUmxzaSqR9%2BUHuyD4nvZJjVsNuDo4%2B1E%2B3CQKF2FcWXxsrMr56vzWkv7qGa1OxEkR0w6hKkwQ%2BxKvc60MIyez8kGOqUBPljhsawt3XkXB0Of4S1NDDVzbmI25%2FIiMaOEWuNQc%2FS2%2B0qQgLho9YCJJVz9zGWePqQEKfNKZGNMNgDuTZRgxWVB4IXP1p8uxixdjnkIE8ihUtK93X%2FyCDKcs7RJGQo4tjQG2lHbybC6%2FN1NgCqX2XHEsDJvb9mUu4Hs8KJpgpcGDGK%2FRNn1xnueRfs1SLkc%2BFuKNBMzA%2FjJQJ%2Fa0uDG6xQ1X8ap&X-Amz-Signature=80db1fff5f9b20a64eeab91aa53747b28c71f7cbc3b67d79b7896547874f5662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SIFI7F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9fFd%2BEwTrKizx7TIfdLCujgXWJyftyNuvfpFKqP%2FqqAIgf0ZV3ctiBUgVg%2Fn%2BfSJNsMnzkYpbRlgupYNPrFK0YxQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOlcyhI8695ZizmwiCrcA0JfK0KyxPx9INAkOvelJztSprgXltyo5hPcV5EwubeoX2ijOYx0Mk3%2Bf71rjIBK1%2BxqzB0xaHusURybaJXhibtr2LMcEXesGUszpm12MdU%2FMcRG%2FXN7aJ7%2Bw8Xpr9ebuMbX4j4%2FTpvzeYKl19AjYv4%2BdU8Ozh5XL%2BKd%2BfDwhXAsnZQL%2FJkXvXxMww%2F0zapZhI7gT72ylAxytOlITZuiYhT5vlTlEmbKya6BXodXhJtOqmthzfzlarjbFX75AMxlI5IXahU8uHrzFUeQrabmA88zHB5ZnhTUJbH3xVP%2F3JEtPiDgHRP9lUrg8tOogExtGhcBpsf578wEO6O4EvRGOKLS8%2FXy6pYaW%2BWil6SBVwwrfmeBL9iEmAQQCy5u0Ik6IaF0peeDOTvxB%2FRAyvkgvVdw8roxuy4XG49LLQoPwQZAa1PMOu43KwxXmfegI%2F%2FFochbPPeLvSNN0K%2FW8bqaUqXJwzUFh%2BzZoUDEsqvhQmttCEThmagVGXeRikEzghQNhIw3IGAtZNPJGSdf%2BR846Q1x2JEQ%2Fr3riMFwTcpVvxIDFUmxzaSqR9%2BUHuyD4nvZJjVsNuDo4%2B1E%2B3CQKF2FcWXxsrMr56vzWkv7qGa1OxEkR0w6hKkwQ%2BxKvc60MIyez8kGOqUBPljhsawt3XkXB0Of4S1NDDVzbmI25%2FIiMaOEWuNQc%2FS2%2B0qQgLho9YCJJVz9zGWePqQEKfNKZGNMNgDuTZRgxWVB4IXP1p8uxixdjnkIE8ihUtK93X%2FyCDKcs7RJGQo4tjQG2lHbybC6%2FN1NgCqX2XHEsDJvb9mUu4Hs8KJpgpcGDGK%2FRNn1xnueRfs1SLkc%2BFuKNBMzA%2FjJQJ%2Fa0uDG6xQ1X8ap&X-Amz-Signature=f728f0342425aeb77f466c4503cc60b4cfb41717530971bcc5dc63d0b76b9b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

