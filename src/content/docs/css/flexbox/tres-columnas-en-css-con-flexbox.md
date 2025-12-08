---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFJV4DG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKqfNTo%2Bc%2FrPSwhgAOXA24KjDcWq0IzXLg9VIXiyJ7IAiBQOxt%2BXQ%2Fesdz%2FIsh3BSBJViDrNmZZx1xqxK4%2B%2FRwyriqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkidzzclUxWnwC%2FtKtwDBk%2BCX5QhrR7naTEfqmxA706S0PY8U8YTjArLGCkcJuwVsWne0CNKksovYW3AeL3OJg2%2BIlQXPp132%2BFMBhJ17C1VajkfenNqR1S5nBeKdiPJZQZbpOGykepqHPAXEamB2ymsbqTVX%2Fbiaj4tWYXvowXp%2FKT%2BolZUYaIax2zFafFFCipLWL%2FY7s6n4UEhObvyoOZfgprZXXsg53tglNkBBOlQDnInGz6Uz4HsK7HGdbMm9V0JjD0%2FBaGmkOgRzrKDkY4zmjWble1zX%2Fg5Wp9kbAnPYdVs720TQHbx%2B6oYvoc2NGOX9vurMP3GkhhzNjke8qtAu5fJ1i7rrRkxLz1reTXKP6YkpfVYBNY2If8anm8f6tibbpMtvI9eE%2Fg0c3GM43jN3kTh3TCh4jbxknCFDkmrHf7LOOsnFxyew3HWYr3yEXvz2DMbnWE38CQwINZVebX%2BDoE%2BXul3N8JE4zMA8Gs57%2B1OzfflFirOgXZo3%2B0Iz3L8hbLONhUnLAsHjdSeiBjgPotXu%2B95OWGEeLju7QwTR6JXuf1W9WGLKaGtH2621xwhHNsntQD8HOxrETR5Fcfa8seFse5qygTtVadM%2BdhhDz9HmNWjjKv%2Fm3E102EuZUtJLmU7cEVNfB4w5O3ZyQY6pgEanJLLUAdzAE1gU7%2Bh35rbfY3wsXE8QaHpOv2SS1JpgiX5U9e9WD96ar3g0QJ2UKCNJq1EWq8%2Fm0IAO6TKFG%2FTvZ2XxKzkM96XmFql6gXLSXAuFrF2HdTenLuW%2F2s0ILqtQgJqqpIDj3DNoblsMF8DqQ4Gkr2GVP6spvveOSpHfFD1Mg2OHSnBFh3TQJg4t6I7mEuMM8fZSKOed92PmmHRA4SOyU1%2F&X-Amz-Signature=c0429d2edaebe1153a4b9292bf1a8c429a33199dce5710ea8cd054f040354b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFJV4DG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKqfNTo%2Bc%2FrPSwhgAOXA24KjDcWq0IzXLg9VIXiyJ7IAiBQOxt%2BXQ%2Fesdz%2FIsh3BSBJViDrNmZZx1xqxK4%2B%2FRwyriqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkidzzclUxWnwC%2FtKtwDBk%2BCX5QhrR7naTEfqmxA706S0PY8U8YTjArLGCkcJuwVsWne0CNKksovYW3AeL3OJg2%2BIlQXPp132%2BFMBhJ17C1VajkfenNqR1S5nBeKdiPJZQZbpOGykepqHPAXEamB2ymsbqTVX%2Fbiaj4tWYXvowXp%2FKT%2BolZUYaIax2zFafFFCipLWL%2FY7s6n4UEhObvyoOZfgprZXXsg53tglNkBBOlQDnInGz6Uz4HsK7HGdbMm9V0JjD0%2FBaGmkOgRzrKDkY4zmjWble1zX%2Fg5Wp9kbAnPYdVs720TQHbx%2B6oYvoc2NGOX9vurMP3GkhhzNjke8qtAu5fJ1i7rrRkxLz1reTXKP6YkpfVYBNY2If8anm8f6tibbpMtvI9eE%2Fg0c3GM43jN3kTh3TCh4jbxknCFDkmrHf7LOOsnFxyew3HWYr3yEXvz2DMbnWE38CQwINZVebX%2BDoE%2BXul3N8JE4zMA8Gs57%2B1OzfflFirOgXZo3%2B0Iz3L8hbLONhUnLAsHjdSeiBjgPotXu%2B95OWGEeLju7QwTR6JXuf1W9WGLKaGtH2621xwhHNsntQD8HOxrETR5Fcfa8seFse5qygTtVadM%2BdhhDz9HmNWjjKv%2Fm3E102EuZUtJLmU7cEVNfB4w5O3ZyQY6pgEanJLLUAdzAE1gU7%2Bh35rbfY3wsXE8QaHpOv2SS1JpgiX5U9e9WD96ar3g0QJ2UKCNJq1EWq8%2Fm0IAO6TKFG%2FTvZ2XxKzkM96XmFql6gXLSXAuFrF2HdTenLuW%2F2s0ILqtQgJqqpIDj3DNoblsMF8DqQ4Gkr2GVP6spvveOSpHfFD1Mg2OHSnBFh3TQJg4t6I7mEuMM8fZSKOed92PmmHRA4SOyU1%2F&X-Amz-Signature=5b2dabcd23ac9d2ec3dd603e43c71bfd3d53f08537ac66651652cac5e3802ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

