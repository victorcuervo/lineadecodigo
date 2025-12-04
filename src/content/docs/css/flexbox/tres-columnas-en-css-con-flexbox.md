---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6KKQVPY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqvJbGD6B1eSujGTwtbtav4znxq6agF8ciBk6G9vtlpAIhAJGAYhh5QzkX440ZYuxfOS6JwQJOTYxPhblcUJZl8N%2F0Kv8DCEkQABoMNjM3NDIzMTgzODA1IgxZQxoJhK5ck%2F6m7tcq3AMILp6rX4IjDKB33f%2Bk7PsydSJDbuqhCzTyiNy6Jlxk27QJhvbfS%2BHyhbMvs7jcBdgcmnQAatXmWoUPDN1BDXKkjG1pgTL%2FB9D8qDAfdwcxTGliwzOAZ0QTGhqw4gJRJxBF6v3Kefky0LdjZvOLurB6C%2B3eTHFgShKHyeN2TI4adXU1buww0R9BdLvOgodfFLbT%2By9Hs%2BszIUhPzMgKFrrFyWx7bUiWPK0yXkv2u6dtY54D99cj8DHJuO%2FypJmSQrBFY9AXSAdgx%2FmDvjebUpxtWYNuyLszNAOivQ7sEAHUEoxGvSLZ7ge6xtBcCVM0HbTo8gYOSQtfa00fAuy2loGQ2jHSHzJJbHEPsNvBfcXV41yRodBmeZMLmKghPoZfVWWIG59RVJiiZ7%2BcGAPfbEHzGfPLnIW8W1zsIBKBZDYbVsiLc%2BzJeIAt5nUxeiOIWYA8%2BmlDPABM20FI3p3Rd9%2Botbj9WNp2mPTP%2FNgWXgF%2F5Z%2BNqaD65KgnAktWj2QxVIQjG5PPkHwwJx2tUQryt1fadciph3yEUIiidkoqdIV2zNtysz%2BAhB3ijqRUj3CcQYyR%2BHyQVGChLHycKQK6wCpwczhjaV4sRE8dX4mzDexUbXL%2FeporNcIgYTzoozC23MbJBjqkASZq1qonY%2FpCSGYuNtpXQS55dDrlrNq4YGm2kOdWlQCz0NmzQ3o5IRCKTHoR1sKPXrqc6PDnkdQPbEaVx3cGPkgu9zoSL7gKca7bmVYQe1JdUhd%2Ftf5zvgH7TAs6Fr5pmHh499uARV%2BDu3tpc%2ByrCOthQ2OfhhokVga79oXp2OkFZw29Rb6jBHjTffyZBYxAHp3mfiJXuXwTdlMdVQsGAsmu9qaa&X-Amz-Signature=e267c401c013873593516df44ad58e1832cb9dce8eb30abc25b33e583c4a86f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6KKQVPY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqvJbGD6B1eSujGTwtbtav4znxq6agF8ciBk6G9vtlpAIhAJGAYhh5QzkX440ZYuxfOS6JwQJOTYxPhblcUJZl8N%2F0Kv8DCEkQABoMNjM3NDIzMTgzODA1IgxZQxoJhK5ck%2F6m7tcq3AMILp6rX4IjDKB33f%2Bk7PsydSJDbuqhCzTyiNy6Jlxk27QJhvbfS%2BHyhbMvs7jcBdgcmnQAatXmWoUPDN1BDXKkjG1pgTL%2FB9D8qDAfdwcxTGliwzOAZ0QTGhqw4gJRJxBF6v3Kefky0LdjZvOLurB6C%2B3eTHFgShKHyeN2TI4adXU1buww0R9BdLvOgodfFLbT%2By9Hs%2BszIUhPzMgKFrrFyWx7bUiWPK0yXkv2u6dtY54D99cj8DHJuO%2FypJmSQrBFY9AXSAdgx%2FmDvjebUpxtWYNuyLszNAOivQ7sEAHUEoxGvSLZ7ge6xtBcCVM0HbTo8gYOSQtfa00fAuy2loGQ2jHSHzJJbHEPsNvBfcXV41yRodBmeZMLmKghPoZfVWWIG59RVJiiZ7%2BcGAPfbEHzGfPLnIW8W1zsIBKBZDYbVsiLc%2BzJeIAt5nUxeiOIWYA8%2BmlDPABM20FI3p3Rd9%2Botbj9WNp2mPTP%2FNgWXgF%2F5Z%2BNqaD65KgnAktWj2QxVIQjG5PPkHwwJx2tUQryt1fadciph3yEUIiidkoqdIV2zNtysz%2BAhB3ijqRUj3CcQYyR%2BHyQVGChLHycKQK6wCpwczhjaV4sRE8dX4mzDexUbXL%2FeporNcIgYTzoozC23MbJBjqkASZq1qonY%2FpCSGYuNtpXQS55dDrlrNq4YGm2kOdWlQCz0NmzQ3o5IRCKTHoR1sKPXrqc6PDnkdQPbEaVx3cGPkgu9zoSL7gKca7bmVYQe1JdUhd%2Ftf5zvgH7TAs6Fr5pmHh499uARV%2BDu3tpc%2ByrCOthQ2OfhhokVga79oXp2OkFZw29Rb6jBHjTffyZBYxAHp3mfiJXuXwTdlMdVQsGAsmu9qaa&X-Amz-Signature=a9637bcb2831efece525098ec519cdbac696b5593c73d05746f28d8e8e68cd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

