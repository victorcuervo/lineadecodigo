---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y37RRQG7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs2ymcay2xnn2prwOZ78GgF61at2k%2FAi7nF6T8RXbmzAIgLRmuzIDPkP6D9xTo359DN435nMwjUtnsB4Pz1oD4NgMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEpUKV6Yz0g%2FKZwQircA9NthIftWFE9HGXSZsaV%2BZKonrNyc3UjjpR77A3kWgt%2FSOCyN531R%2FJpprWEAXJ6wiXUtPOFJ7MrLGhb4Fctr4aE75joh23DaSeu4X5RzK9E3Axtmo8bM2uNTniNjlZu04QqkXNhQazY%2BJ0DUmxbngoZpqiNIEa%2BQ7CD1mQdCp6F%2BTpLA%2FHqdZTwWjUignSOn6t%2FI11Lmg4WEg%2BIblTFdCrqyZ2n3DkCTy2R9KcuM5ls0sW8gnlvNM9%2FaxsfcQ45A8Zery4N5C%2FegwbaiR8nJ0qSmeKI95uACmHZEKacpucaYlts92wARZGRG8fY9EV%2B8V0Fpxk0HnYQ3Ipt3wjFYIvYglHXehUS6md9pj3GmuiMb2tY8oGSrbeeuX7dfg%2FK3Px1ONOJieDEvwEeo4A55u72SJanfX8pgt9SNOLlNQJHglFstEP9csdoAmF5VUKEYGNZSizQQNhgrowrkbVoTGkMhHd%2BgPfjfOJ5SJ5LA40iqpvjz6Pc5cEjuajXo%2BhafmDfV6ThqBdEVi35uDZWew8JmoeT1%2BelodMODwGLyssL1UZujDOwNy%2FjUmthfM%2B7LMsyryYxuVfuRU5OI3xlmFQMrn7CdMcagr8ti7GCPZd3Lt8QTsJn4gJ4BeprMPyU2ckGOqUBoPKjQDBChz%2FMQuV8ojaqZAJBmDD3%2FUJNKy7LL2Mh7PdA9x1Ga7TU5ffusklTmiHvh2bKVJ3m8x8BOkUTHpU5DXnUikTcZqeqojbqq8OrWi0%2BWyQfocpopbhQPgLXpqxTOKilZPsPp9MVwxqrW7aIB%2FETlKwN9fkEubNeUAUcaGxpo%2FibmB7jWKaDPpQOg0PlmKxr8yXOZTBCQgALG13HdskNczY%2F&X-Amz-Signature=b3f408dae605b873529bd2763fe045a90485d68d599cc2a9fee17499cfe7ad3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y37RRQG7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs2ymcay2xnn2prwOZ78GgF61at2k%2FAi7nF6T8RXbmzAIgLRmuzIDPkP6D9xTo359DN435nMwjUtnsB4Pz1oD4NgMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEpUKV6Yz0g%2FKZwQircA9NthIftWFE9HGXSZsaV%2BZKonrNyc3UjjpR77A3kWgt%2FSOCyN531R%2FJpprWEAXJ6wiXUtPOFJ7MrLGhb4Fctr4aE75joh23DaSeu4X5RzK9E3Axtmo8bM2uNTniNjlZu04QqkXNhQazY%2BJ0DUmxbngoZpqiNIEa%2BQ7CD1mQdCp6F%2BTpLA%2FHqdZTwWjUignSOn6t%2FI11Lmg4WEg%2BIblTFdCrqyZ2n3DkCTy2R9KcuM5ls0sW8gnlvNM9%2FaxsfcQ45A8Zery4N5C%2FegwbaiR8nJ0qSmeKI95uACmHZEKacpucaYlts92wARZGRG8fY9EV%2B8V0Fpxk0HnYQ3Ipt3wjFYIvYglHXehUS6md9pj3GmuiMb2tY8oGSrbeeuX7dfg%2FK3Px1ONOJieDEvwEeo4A55u72SJanfX8pgt9SNOLlNQJHglFstEP9csdoAmF5VUKEYGNZSizQQNhgrowrkbVoTGkMhHd%2BgPfjfOJ5SJ5LA40iqpvjz6Pc5cEjuajXo%2BhafmDfV6ThqBdEVi35uDZWew8JmoeT1%2BelodMODwGLyssL1UZujDOwNy%2FjUmthfM%2B7LMsyryYxuVfuRU5OI3xlmFQMrn7CdMcagr8ti7GCPZd3Lt8QTsJn4gJ4BeprMPyU2ckGOqUBoPKjQDBChz%2FMQuV8ojaqZAJBmDD3%2FUJNKy7LL2Mh7PdA9x1Ga7TU5ffusklTmiHvh2bKVJ3m8x8BOkUTHpU5DXnUikTcZqeqojbqq8OrWi0%2BWyQfocpopbhQPgLXpqxTOKilZPsPp9MVwxqrW7aIB%2FETlKwN9fkEubNeUAUcaGxpo%2FibmB7jWKaDPpQOg0PlmKxr8yXOZTBCQgALG13HdskNczY%2F&X-Amz-Signature=7da4406ad5b3f4d0484051bd0a158586fd2a4cadcdef7fc075a6469e6082f2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

