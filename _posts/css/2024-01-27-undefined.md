---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBWCNUM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYY2viWMt9dX2%2Bwx9SfhbdgwyxE82xb9r0UOuC%2BauikAiAtt5gyDu%2B09KFqmBtQGDMD80Jnx9fAQ70yfp6fGnNqcir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMWcgtrGOTReAukEFbKtwDUvhRtCjqglqxUL6bgsbsw%2FZqoaJHT1kYeF%2BMQMEuN0eV7tH7BvXcCqH7xlXit4z4Av%2FevEv5OacJufUQ76Y6iidII0ykIz7B%2B%2Fl%2FWwxfFW77te00gcYBniVvxcx0LLz0IjWjMm2dEhIZDIBxSFXkBQ067oJrvb5se8HzGoqRrqx9%2BrUxxoVb9R%2BalL%2FaRg31fQyuxHXSuxdzPdJm73xjsrUbzufK7uxXJKxbRaQv6mVCBSzMWfg50l9vLvR2g7jxwoOvyM8NsTaSx5ecU8LO4E2BTv6n%2FIcjccgFVzO09IKduDB17A46zoLtfa0HzOWpSsuZsgKYEz85B%2FYhT%2BBcFpGvy0XUz%2FBWMdCZS6%2B8sH7L2qGB1hleOQxlgU8rjyoWOFXQDPQFzHdVcw1xFSybflv0iwaiNdLIOmWptHc5N7PJkoNWbdW0lbI%2BNRvMWqwx9ashOK8KAXM7tF3%2Fa7cHwZvmPQ8wErZwjXK8F04%2Fp0BO6O64WFtj03Qlcw1TGNx0zk%2FyhbOKY45KGye1GZ0lb9UWROEMpy%2FKQE%2BshyKgVQB%2F0B0xt4KjkcDCdCbF1RJV%2FrKkSw4qg7c%2BU0EDJVSaEZNQu7Zk%2FntnSPJsTkGO0ncuiG240aCX653%2BGy4wqP69yQY6pgF0bYMFXHovmBUU7JihBy%2Fka5wmlODxRmuy583aK1MiK2fMJbkmz0kb4W7TZ7yASkrGzDf4rHQvz0gEdw1p0nX1D%2Fb4XCvyNRmeGWwC9o3qepKLIO4lvgwpozyhRIYuwIxvzZmnqXrSNlIr2tBAXMEuMlUIYmWQ0oWw7r1Pc5qYH30rNqlJtaLHuqk29b8LH5Rq0hwa89jJ9jphI8hW7%2FjZ97I0PAcM&X-Amz-Signature=e9f0400a164e33b7bdd3ac36bdab1e84674f437e4f7d76e34afd53e521d2ae99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBWCNUM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYY2viWMt9dX2%2Bwx9SfhbdgwyxE82xb9r0UOuC%2BauikAiAtt5gyDu%2B09KFqmBtQGDMD80Jnx9fAQ70yfp6fGnNqcir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMWcgtrGOTReAukEFbKtwDUvhRtCjqglqxUL6bgsbsw%2FZqoaJHT1kYeF%2BMQMEuN0eV7tH7BvXcCqH7xlXit4z4Av%2FevEv5OacJufUQ76Y6iidII0ykIz7B%2B%2Fl%2FWwxfFW77te00gcYBniVvxcx0LLz0IjWjMm2dEhIZDIBxSFXkBQ067oJrvb5se8HzGoqRrqx9%2BrUxxoVb9R%2BalL%2FaRg31fQyuxHXSuxdzPdJm73xjsrUbzufK7uxXJKxbRaQv6mVCBSzMWfg50l9vLvR2g7jxwoOvyM8NsTaSx5ecU8LO4E2BTv6n%2FIcjccgFVzO09IKduDB17A46zoLtfa0HzOWpSsuZsgKYEz85B%2FYhT%2BBcFpGvy0XUz%2FBWMdCZS6%2B8sH7L2qGB1hleOQxlgU8rjyoWOFXQDPQFzHdVcw1xFSybflv0iwaiNdLIOmWptHc5N7PJkoNWbdW0lbI%2BNRvMWqwx9ashOK8KAXM7tF3%2Fa7cHwZvmPQ8wErZwjXK8F04%2Fp0BO6O64WFtj03Qlcw1TGNx0zk%2FyhbOKY45KGye1GZ0lb9UWROEMpy%2FKQE%2BshyKgVQB%2F0B0xt4KjkcDCdCbF1RJV%2FrKkSw4qg7c%2BU0EDJVSaEZNQu7Zk%2FntnSPJsTkGO0ncuiG240aCX653%2BGy4wqP69yQY6pgF0bYMFXHovmBUU7JihBy%2Fka5wmlODxRmuy583aK1MiK2fMJbkmz0kb4W7TZ7yASkrGzDf4rHQvz0gEdw1p0nX1D%2Fb4XCvyNRmeGWwC9o3qepKLIO4lvgwpozyhRIYuwIxvzZmnqXrSNlIr2tBAXMEuMlUIYmWQ0oWw7r1Pc5qYH30rNqlJtaLHuqk29b8LH5Rq0hwa89jJ9jphI8hW7%2FjZ97I0PAcM&X-Amz-Signature=71fc2caee8967f4abc8cf2f6ddefe5eefb4fe381d983eee3162daec43e52dbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

