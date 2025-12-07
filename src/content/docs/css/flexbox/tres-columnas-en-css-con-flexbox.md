---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5XCYW5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbIiIXme4h%2B5qBorwF3AnZ6qVNz%2BC4WctYml65%2Fuv1oQIgTpfq9gqsNeJ21DQxJMmaMn2lr5wny259QNBuOdmt30cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNiWnj1rvVq5aZaHCrcA9zR3ZnOot4cuXwYJRPA2tDvMV5bD0%2FNp93FP%2FznboyHK%2BGCvkuPccGbIFiguv8YzDCd4p2tjR2jvhjJBSROuRJ5NTw6cKbVd5JNevz91kHC1ihHpb2DJ%2BUnnuKUiP6qG3peW4sfCzETgR%2FRB9HUWMECVRSjorMejFiJCvR0QF%2FlpQuW8e9WQ%2BUc%2BtGbaegeUbleR7kd0eJs33EJu7syo001hUakMXPljJE5WwmffhdNWe3it99xVHZLCpxrnjL%2FjPwcWvA%2BC6TlmjwHIV2zmEKu99f8dnsVPOFsJWmT7x34Uhl7t%2F0z1f1t4U1EcNSWZLZVPgn0rqiq2OeHf2%2BV%2BpiohkOwaDjYBgTAoJfVQsxodYBIU%2Fra9ZLACp3lF3dK%2FjeNALRQBslcB%2Baf9PkYCX4TJTRHgxNhwNL1M%2Fz%2Fb1wgaU08vIMFT7iolw5dxsj76BA6rf2sVjH53gROYxtHPuf8%2FfNcyZ1aOa6GzlM8MofmhcPtTVTJ5974yiP8JKzefGdQ9dHjtWa%2Bk1VGoDk%2FZYrEz2p8c4pGiI16brnD%2ButBf4xHsV5UuK1tWqoK8PBAremLJyN%2BJc1Tm03vm24jg3nPreRovOosaWQkvukR8bNiX8oJphJd5nVr9t67MMP90skGOqUB5XNTx8cKh8FQ2Qvy0y5sPYOjZ1ME0FxCLEl649EwkiWfuYa8eHlragIMj0LfzMQAKRkonEWGXpzz%2FlHBsoIISb%2FRZuJ%2BqOoDpifJMnyoQh0517HeBCnKEquAQT3z6unqy976le4lV9tFzt3k86ly8BerMnhusXyUwTC5%2Fhu3SuFxCHD9GKLtJcPYk%2F5bbgmZ7MxtqAyVknCfiiK2tmyHGBnAIQxv&X-Amz-Signature=1f3276422ed53e26491bf29604e613285bac2fc2a56d76a8fd61302c93c96001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5XCYW5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbIiIXme4h%2B5qBorwF3AnZ6qVNz%2BC4WctYml65%2Fuv1oQIgTpfq9gqsNeJ21DQxJMmaMn2lr5wny259QNBuOdmt30cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNiWnj1rvVq5aZaHCrcA9zR3ZnOot4cuXwYJRPA2tDvMV5bD0%2FNp93FP%2FznboyHK%2BGCvkuPccGbIFiguv8YzDCd4p2tjR2jvhjJBSROuRJ5NTw6cKbVd5JNevz91kHC1ihHpb2DJ%2BUnnuKUiP6qG3peW4sfCzETgR%2FRB9HUWMECVRSjorMejFiJCvR0QF%2FlpQuW8e9WQ%2BUc%2BtGbaegeUbleR7kd0eJs33EJu7syo001hUakMXPljJE5WwmffhdNWe3it99xVHZLCpxrnjL%2FjPwcWvA%2BC6TlmjwHIV2zmEKu99f8dnsVPOFsJWmT7x34Uhl7t%2F0z1f1t4U1EcNSWZLZVPgn0rqiq2OeHf2%2BV%2BpiohkOwaDjYBgTAoJfVQsxodYBIU%2Fra9ZLACp3lF3dK%2FjeNALRQBslcB%2Baf9PkYCX4TJTRHgxNhwNL1M%2Fz%2Fb1wgaU08vIMFT7iolw5dxsj76BA6rf2sVjH53gROYxtHPuf8%2FfNcyZ1aOa6GzlM8MofmhcPtTVTJ5974yiP8JKzefGdQ9dHjtWa%2Bk1VGoDk%2FZYrEz2p8c4pGiI16brnD%2ButBf4xHsV5UuK1tWqoK8PBAremLJyN%2BJc1Tm03vm24jg3nPreRovOosaWQkvukR8bNiX8oJphJd5nVr9t67MMP90skGOqUB5XNTx8cKh8FQ2Qvy0y5sPYOjZ1ME0FxCLEl649EwkiWfuYa8eHlragIMj0LfzMQAKRkonEWGXpzz%2FlHBsoIISb%2FRZuJ%2BqOoDpifJMnyoQh0517HeBCnKEquAQT3z6unqy976le4lV9tFzt3k86ly8BerMnhusXyUwTC5%2Fhu3SuFxCHD9GKLtJcPYk%2F5bbgmZ7MxtqAyVknCfiiK2tmyHGBnAIQxv&X-Amz-Signature=f72ecb90568419b3a2d304db022f70baa62766e65a26f2d8b164aa8222bc8cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

