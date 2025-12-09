---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAGEOA5R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApN%2FuUd8nazIsq9oINeJNqc3WPPwLwSeUrTvFORE2W%2BAiEAv311HIRmQ%2FHRt%2FiCdEb7P80mWLrXbL1XPhcjXJ%2FG%2BIkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ulzPUTIEDtmD48yrcAzVmh6%2FeshAsme9Uh9U9%2BJSgETg%2F38HbXhckYbPSTYRjcTwMYCvIkt7zfERAUtKQI4WBn6H1rdzXSr%2FUrBxZVvpb2ixW5%2FvQgJwhHnkyODZmu46eQ6mrbiHP%2FWGyUDBhedeWb1uV4QVvOfgAhlmd4wuZ5xQ8q53u4d2QvZBzOb2vw8EZqqxdLRrM%2FqAiw7n7HGn%2B3WF7L2GmVQjax3Op%2BWH8DTlbVw7C1P%2BUN8gBvTgpFbGAv2xg6SgCdjM7%2BD7Q7kFEzHsCGzq9XreBssZO6EzSXHweos6gjMS0FRA57%2F7CO0VylJK0i9Orf376J9EPvMbdSBiXyNs2GpVCrTEg%2BEPgf2h%2BQeb3i5hQa7hrbqMcqhqbj22wap9KuCM1dEqCHVktGE1hKgif8%2BKgQyinl0U1lL5OfW0wbxrw2YdfEPwgozPeDyoPSr29K1INQIiXKuqeSgBiKh%2FwkHhV5mnh3LAxM8keRByYg4rc%2FAYsIxlV4dL6XUKFIbrr3uNgmuVZY62zJfohOBPIbo%2FKtdGSNN258iRGg9jCb8BifTgAdK9%2FP%2Brvf70R5XJZKRUwY5P2ep13%2BhJPG%2BUjj0rCVA%2F8Ch2cWMwpNLZMZU%2F5l1gbyYzu40%2F%2Bm%2F8oFjfx3ExyMJfl3skGOqUBSS50%2FrHlbPsMlZH0%2BxMevnwGf%2FhgzguhMK7t6HvRc6%2BnzUAjaDp1d6cU7rUv8e4k9kH%2FSi5RNpG1zwct5cjqUkLiXPrOWhXB3XA2kyrxHoLKwrMDVLfYsoOrFvFvPQhlHCTPkaw4AIAVR4cRKcwjROR%2FEmJf%2BQ%2BO6xaNNcVqAe5XWty5wZIiOEtY%2B4f%2FDxXrSf9xcGGk5ZD6XO6taWuu0bFUb0%2BR&X-Amz-Signature=a294da9df14d5d3ce650ee21ac90879e676dc64cc4ce55cce902b874676ecd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAGEOA5R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApN%2FuUd8nazIsq9oINeJNqc3WPPwLwSeUrTvFORE2W%2BAiEAv311HIRmQ%2FHRt%2FiCdEb7P80mWLrXbL1XPhcjXJ%2FG%2BIkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ulzPUTIEDtmD48yrcAzVmh6%2FeshAsme9Uh9U9%2BJSgETg%2F38HbXhckYbPSTYRjcTwMYCvIkt7zfERAUtKQI4WBn6H1rdzXSr%2FUrBxZVvpb2ixW5%2FvQgJwhHnkyODZmu46eQ6mrbiHP%2FWGyUDBhedeWb1uV4QVvOfgAhlmd4wuZ5xQ8q53u4d2QvZBzOb2vw8EZqqxdLRrM%2FqAiw7n7HGn%2B3WF7L2GmVQjax3Op%2BWH8DTlbVw7C1P%2BUN8gBvTgpFbGAv2xg6SgCdjM7%2BD7Q7kFEzHsCGzq9XreBssZO6EzSXHweos6gjMS0FRA57%2F7CO0VylJK0i9Orf376J9EPvMbdSBiXyNs2GpVCrTEg%2BEPgf2h%2BQeb3i5hQa7hrbqMcqhqbj22wap9KuCM1dEqCHVktGE1hKgif8%2BKgQyinl0U1lL5OfW0wbxrw2YdfEPwgozPeDyoPSr29K1INQIiXKuqeSgBiKh%2FwkHhV5mnh3LAxM8keRByYg4rc%2FAYsIxlV4dL6XUKFIbrr3uNgmuVZY62zJfohOBPIbo%2FKtdGSNN258iRGg9jCb8BifTgAdK9%2FP%2Brvf70R5XJZKRUwY5P2ep13%2BhJPG%2BUjj0rCVA%2F8Ch2cWMwpNLZMZU%2F5l1gbyYzu40%2F%2Bm%2F8oFjfx3ExyMJfl3skGOqUBSS50%2FrHlbPsMlZH0%2BxMevnwGf%2FhgzguhMK7t6HvRc6%2BnzUAjaDp1d6cU7rUv8e4k9kH%2FSi5RNpG1zwct5cjqUkLiXPrOWhXB3XA2kyrxHoLKwrMDVLfYsoOrFvFvPQhlHCTPkaw4AIAVR4cRKcwjROR%2FEmJf%2BQ%2BO6xaNNcVqAe5XWty5wZIiOEtY%2B4f%2FDxXrSf9xcGGk5ZD6XO6taWuu0bFUb0%2BR&X-Amz-Signature=64c26a1ab31b4d694f35ba4a49e5f0912de5b3ba08743f9de5a917cc2570efa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

