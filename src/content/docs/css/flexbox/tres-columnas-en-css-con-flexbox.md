---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7SIHE2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJu8NTjUtFHdVjh0PQv%2ByjR9p%2B7Fiu6rxDPJWXWewWDAiBIElQCpDUpZtE4Eg1iAO5YsSJ%2BhG0fO5p4HDwifL%2FbQir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM2SKBfQKsDWLE2EFXKtwDH8Sm3BnaKe4vwi84AmRD5c5oY28roDMG%2B3O1lNNUn%2Fgr8nDfgWeGm7g9mKweQemfY9hHapWx2ynx%2FhZnDhDcRJFeaYD2eAqhkHWM37kK6SeyDR16c9tsFE1Ww6hYvm4H%2BECEdIrY0qj2Hdgy5jReoPG%2FZgj2zyAyCcanARzoOZoQH3kdF4dE9wEULwwWRGCG4DqyyumteIDocwRLMxny8RYD6mndIfPa7OOBBY9XU4If0OmsIMWF2TbcyIj%2BhIG6dKnbnB%2BV%2FbpvpItYMYpPtpM1ufdGwGL8DJ6Px2ea4BNftCp7o%2FxKdXut6%2BE8E09hyUSnBmsxRK%2BUZ76ZvOG9I1Ffn4n%2FUpTKKehj0cE02uZtVSOJzooIdyGZGSp8PYcr46RE%2BnGFdIstrkL1cEJ5nr2JNeWydZGZwRweZ%2F9dEjumEjDfzHkCOqx0RwXjUqbgt74ActlgYJUzE51v2gZ9Qy8b6C7RPgJrJZ%2Fs8pCwODG%2FCijBMzoxDuszVd%2FwzXlo4q0tB7tg%2BzGjNdFmcMqZCTdqS0uYpZrRNLJA8fh7X7L%2FpHm9IclyGaHNVHksF4u5a374nPKBsNgjM4jehSnKFhKqeLpqWp04%2FlLwxZ398bmLUIPRNiVc3RosWaMw1%2BXLyQY6pgHkKnC5fP%2F2fl9rih6AOH7tVmnvcTcofXEYYBQgdilHH1mlOGqU2ohQSqj9qooZQl8Crgpc%2FZUcCO3%2Fbv08UFsiTfVqXAX8cwT7753oVCtDBQ%2FiHl2%2FB2lF%2FKptZJRIM%2BKYWZBa64pogVfIC4%2F3yZ%2BlISx%2BK0l43KwCJtp03UR0b4G00NjEMsbuQlM0qhY71SsljJ621m9IKY44AI6jpdzI%2F4w1fVTK&X-Amz-Signature=eebacfab9e7f5f98a263ea77d7cbea1b824f0a783cf6e9490968a81a97c8b362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7SIHE2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJu8NTjUtFHdVjh0PQv%2ByjR9p%2B7Fiu6rxDPJWXWewWDAiBIElQCpDUpZtE4Eg1iAO5YsSJ%2BhG0fO5p4HDwifL%2FbQir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM2SKBfQKsDWLE2EFXKtwDH8Sm3BnaKe4vwi84AmRD5c5oY28roDMG%2B3O1lNNUn%2Fgr8nDfgWeGm7g9mKweQemfY9hHapWx2ynx%2FhZnDhDcRJFeaYD2eAqhkHWM37kK6SeyDR16c9tsFE1Ww6hYvm4H%2BECEdIrY0qj2Hdgy5jReoPG%2FZgj2zyAyCcanARzoOZoQH3kdF4dE9wEULwwWRGCG4DqyyumteIDocwRLMxny8RYD6mndIfPa7OOBBY9XU4If0OmsIMWF2TbcyIj%2BhIG6dKnbnB%2BV%2FbpvpItYMYpPtpM1ufdGwGL8DJ6Px2ea4BNftCp7o%2FxKdXut6%2BE8E09hyUSnBmsxRK%2BUZ76ZvOG9I1Ffn4n%2FUpTKKehj0cE02uZtVSOJzooIdyGZGSp8PYcr46RE%2BnGFdIstrkL1cEJ5nr2JNeWydZGZwRweZ%2F9dEjumEjDfzHkCOqx0RwXjUqbgt74ActlgYJUzE51v2gZ9Qy8b6C7RPgJrJZ%2Fs8pCwODG%2FCijBMzoxDuszVd%2FwzXlo4q0tB7tg%2BzGjNdFmcMqZCTdqS0uYpZrRNLJA8fh7X7L%2FpHm9IclyGaHNVHksF4u5a374nPKBsNgjM4jehSnKFhKqeLpqWp04%2FlLwxZ398bmLUIPRNiVc3RosWaMw1%2BXLyQY6pgHkKnC5fP%2F2fl9rih6AOH7tVmnvcTcofXEYYBQgdilHH1mlOGqU2ohQSqj9qooZQl8Crgpc%2FZUcCO3%2Fbv08UFsiTfVqXAX8cwT7753oVCtDBQ%2FiHl2%2FB2lF%2FKptZJRIM%2BKYWZBa64pogVfIC4%2F3yZ%2BlISx%2BK0l43KwCJtp03UR0b4G00NjEMsbuQlM0qhY71SsljJ621m9IKY44AI6jpdzI%2F4w1fVTK&X-Amz-Signature=d4314fb620431f6f5b9d1be3e0e929a7b94b6dc003d7650a9c80b44f23fc8867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

