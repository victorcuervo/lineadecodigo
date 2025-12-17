---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUK7CKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALu38%2B8ZKZYU6tux82ztd6NxLcpsjM7Hk%2BhWHe6j6kqAiBSAdUui7%2FmHYjgHa8bDRGaJl3ai0oRnlmrnhlVVLXm7Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmOqlf%2BpJnX3BOLFJKtwD2tU6ZSNzeLj7Id8IFrS3lZrdNPnS%2FnqscAicqs2B%2FgxIN9sawe7Il2MOTXWlPY3klmfkZdC777eiorXJxdUfFsmALe73uelSE5Js4fXCNYNf531OwGQBCdJ5Bkm%2B4QRk83cE%2BdTpjBabhpycMS0SOE4gfbjmcY%2FmzMIgaRgqmJLlInyPbfJDreFuBkx7BfsGUsizj7kJOECyK6o9b9pcW5Npg2nwGRAWvQNia63tcjEUsLxVd8UrX2udovin8KRJpXjOHOmMMhvQiUmzvNtAswJ9xmaJMeeOirgi0%2B8n50OnKjLJDtit95phTKnXphyaFr8ee5mbbky9s836XtZO8CVU8TH2wH5W9wkZoTLPYi4%2FhoLY5LwNpRJqvvpeLxGngjjdbLvWAoljUwAkCk3%2BRwteHemKApoo1e%2Fl6O5aEkAeM1%2FizS6auN5AWLP5z87OvY1OdKwsEFVYlXYsRwfw7ry6YjFxdG4644gT6NJXWhFbjM%2F4JDdrebgHK3wmCTZmQmmr4mK4vN%2BesGOnw5v2Z8UDjJabwTvXaH4pQCW2G1Dt9%2FnXePtUoWc9mN8e1HPuEx9LiGNcYcimVnRDYa7nDMLZYe1COsqUaRHZ843MY0AMA1ickjg8arE%2FeuYw4ZeIygY6pgG07bEgzzCH5njPSZHv%2FBYAZog4oltLdoMlqhfNI7Lrx%2Bb8wNoQBDtma4e4FnO6R5MM2Ry4XKMf4fScL0YA3K1RCD23NyR8hzOBQK7BZvUvwNL44U3%2BTcVnzniK2hExhEBRnbzlH5%2BlifmOVzv2TDEvmaw4QJpAgHfz3v7%2Fkfi%2Ft%2B1TxIqIScbwCx6wbeOa1v3r5%2F1ATUs37gRykAMvrEOfqNZajcBb&X-Amz-Signature=0e73b867dc0c0ee436e3031091ac1aa6e693e4c745ec0f114c843f9c67ec9ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUK7CKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALu38%2B8ZKZYU6tux82ztd6NxLcpsjM7Hk%2BhWHe6j6kqAiBSAdUui7%2FmHYjgHa8bDRGaJl3ai0oRnlmrnhlVVLXm7Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmOqlf%2BpJnX3BOLFJKtwD2tU6ZSNzeLj7Id8IFrS3lZrdNPnS%2FnqscAicqs2B%2FgxIN9sawe7Il2MOTXWlPY3klmfkZdC777eiorXJxdUfFsmALe73uelSE5Js4fXCNYNf531OwGQBCdJ5Bkm%2B4QRk83cE%2BdTpjBabhpycMS0SOE4gfbjmcY%2FmzMIgaRgqmJLlInyPbfJDreFuBkx7BfsGUsizj7kJOECyK6o9b9pcW5Npg2nwGRAWvQNia63tcjEUsLxVd8UrX2udovin8KRJpXjOHOmMMhvQiUmzvNtAswJ9xmaJMeeOirgi0%2B8n50OnKjLJDtit95phTKnXphyaFr8ee5mbbky9s836XtZO8CVU8TH2wH5W9wkZoTLPYi4%2FhoLY5LwNpRJqvvpeLxGngjjdbLvWAoljUwAkCk3%2BRwteHemKApoo1e%2Fl6O5aEkAeM1%2FizS6auN5AWLP5z87OvY1OdKwsEFVYlXYsRwfw7ry6YjFxdG4644gT6NJXWhFbjM%2F4JDdrebgHK3wmCTZmQmmr4mK4vN%2BesGOnw5v2Z8UDjJabwTvXaH4pQCW2G1Dt9%2FnXePtUoWc9mN8e1HPuEx9LiGNcYcimVnRDYa7nDMLZYe1COsqUaRHZ843MY0AMA1ickjg8arE%2FeuYw4ZeIygY6pgG07bEgzzCH5njPSZHv%2FBYAZog4oltLdoMlqhfNI7Lrx%2Bb8wNoQBDtma4e4FnO6R5MM2Ry4XKMf4fScL0YA3K1RCD23NyR8hzOBQK7BZvUvwNL44U3%2BTcVnzniK2hExhEBRnbzlH5%2BlifmOVzv2TDEvmaw4QJpAgHfz3v7%2Fkfi%2Ft%2B1TxIqIScbwCx6wbeOa1v3r5%2F1ATUs37gRykAMvrEOfqNZajcBb&X-Amz-Signature=797f7c99e896e9da2b97ef68944d969c149045cded42542ea88ab79759dd46f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

