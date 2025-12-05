---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2VPECC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoqsCEARWsPNROJgJGDKzbBboYkcBIE06beLLE8%2FWRjQIhAJf3xfr9XQSZo%2FXdqlwE21n1794EaX3N5rxnK44B7H%2BQKv8DCFoQABoMNjM3NDIzMTgzODA1IgxgsqJzWFphNoWb0aYq3AOHLk3TvjsS%2FD2XT2veR3QzZOO03QAuqmX%2FtBXF7Inkf7JsL42zdvZ54VlAlq37qxE4MwzY%2FZdNztGIWauiIO%2BAVAI%2BzZ801YWIJnTnsMMGE8Cr7PPe6%2BRnqk22X29Y1EMUEFYZoYxTybgLvUe5hb5Sns1VpXa%2Bx0RJBZ50xnWJLAzjODLcp%2BNphnCITa%2FlfwtuR0ji6d19iCfxKlepkNrLvUgCz6WWnGbn6lQ0TjQCWX0DLtoAa2ks%2FFoDGud4MaXWf3n5icI0CuLZDYurCckV52sL7zkNLe5xhCHqoMNnqAA%2BsKoh98D6ELlB7BxGzK0lUzRzjuYPjbrT1iupxiDnuxRiENiVwEU6Mvm3%2BknFR3QxCpGXgwCw9w2KwCiDYY6fTD4KZBknQ0BkzwTZrbVb1lDAOSQXTC6sJ%2BkQDc8DsMvl4GFyqqXHy54DHBfBxipYK2XMhr%2F3ybvfi0Tbcvw3SkjIeCCiCdUnH8xsRj1XYZ4EmLUNnk7diMbl6%2BZDi%2BNz%2BwkvqvYbEc71oYcKWNBxV0xR3%2BBrzOz8FJ8KH1XH37ZKZOXKIfRIua4%2BHM17RrmLudwHX2v6OR%2F%2Bn5PXyIDLfehmkBO%2FALVngkfimg0e0U05ZvJJITm0l3ivBTCKy8rJBjqkAXy4rFZ281b2uVRC1nvY0ID4QDGZmHDIX728NBm6xgVB5x1FZwtgSCNiY3k1pLE7Mujwrie%2F01znfq18WM%2BbTvsxtdH5zvMb0Jg9%2Fv453Cg14rF5M0uQLH%2BNuTOPK9YoAnt8x5UgOkt8SvuIzYm7SoGHq4izfqpjTsyRbYbOPNTjKSHPBbjNkmots5irouqO%2FypaArtJOEVAqOTUq5SZs3PzWTL0&X-Amz-Signature=594072054748459237b6742a43e6074a9294007e8cf6396e49a79cf232d6d5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2VPECC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoqsCEARWsPNROJgJGDKzbBboYkcBIE06beLLE8%2FWRjQIhAJf3xfr9XQSZo%2FXdqlwE21n1794EaX3N5rxnK44B7H%2BQKv8DCFoQABoMNjM3NDIzMTgzODA1IgxgsqJzWFphNoWb0aYq3AOHLk3TvjsS%2FD2XT2veR3QzZOO03QAuqmX%2FtBXF7Inkf7JsL42zdvZ54VlAlq37qxE4MwzY%2FZdNztGIWauiIO%2BAVAI%2BzZ801YWIJnTnsMMGE8Cr7PPe6%2BRnqk22X29Y1EMUEFYZoYxTybgLvUe5hb5Sns1VpXa%2Bx0RJBZ50xnWJLAzjODLcp%2BNphnCITa%2FlfwtuR0ji6d19iCfxKlepkNrLvUgCz6WWnGbn6lQ0TjQCWX0DLtoAa2ks%2FFoDGud4MaXWf3n5icI0CuLZDYurCckV52sL7zkNLe5xhCHqoMNnqAA%2BsKoh98D6ELlB7BxGzK0lUzRzjuYPjbrT1iupxiDnuxRiENiVwEU6Mvm3%2BknFR3QxCpGXgwCw9w2KwCiDYY6fTD4KZBknQ0BkzwTZrbVb1lDAOSQXTC6sJ%2BkQDc8DsMvl4GFyqqXHy54DHBfBxipYK2XMhr%2F3ybvfi0Tbcvw3SkjIeCCiCdUnH8xsRj1XYZ4EmLUNnk7diMbl6%2BZDi%2BNz%2BwkvqvYbEc71oYcKWNBxV0xR3%2BBrzOz8FJ8KH1XH37ZKZOXKIfRIua4%2BHM17RrmLudwHX2v6OR%2F%2Bn5PXyIDLfehmkBO%2FALVngkfimg0e0U05ZvJJITm0l3ivBTCKy8rJBjqkAXy4rFZ281b2uVRC1nvY0ID4QDGZmHDIX728NBm6xgVB5x1FZwtgSCNiY3k1pLE7Mujwrie%2F01znfq18WM%2BbTvsxtdH5zvMb0Jg9%2Fv453Cg14rF5M0uQLH%2BNuTOPK9YoAnt8x5UgOkt8SvuIzYm7SoGHq4izfqpjTsyRbYbOPNTjKSHPBbjNkmots5irouqO%2FypaArtJOEVAqOTUq5SZs3PzWTL0&X-Amz-Signature=0310d7dbf2a86d81a024b02bc8b71cedde3d1689da676777df9f19ba9857eaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

