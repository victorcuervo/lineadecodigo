---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7KGPYA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCm%2FU9KqcNzi4Yr78KDcwOBVS4WzDMmnTZkUUbtObNYDgIgbcINGdRGglg14rxpL3zsCzB%2FZTXkbGzqr0R048%2BD%2FyMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL8OrEDxD2wg5Zr%2BoircA8vknQk44wYVR08S8eN3ywRqktB6ub7fgEAt78dDz9qEs2U%2FEZJ9ZTbmCM2LVjQ1OQX9NY7fUNXCZmZ9dODbat2DctalC8Xoqp1u1p376Np6SSx8IGQ36UhPUbyk2wI6Puf32%2FWyskiAnYJd4TOLDN31imumhLeLV9LsPwlzDGut2U75evCsJGBFjnCFk1RRPrFXMosrqyHa1rHT2%2BzzAQL7fJXvOR%2BIRAW3e9YJ2FtabYLcB3Ogdw6oCoc6xrhDUQOQ2UEA%2BsypPOoPxmj2RqrtLk2L4GsJDI3HtgdfgTDQkyCXfKXoA4qIuO9YfBGIgtiW6mMirqiv5G1w8LcvDdBgr8j%2FkFotS5%2FN7m%2FSe8jA55uxegDUzQ2TC2z7rQnVsl1XesfN6xU9XPE8EFdn43er54k0HY44L8yJWaF3I8ZyRikcF59LIOHic1RSdHxFLLW0TcTQVZgVrx1RGYdvDU4bIgtOWBorVXVV8Y8o1cfT8j%2FRmK8SSezFgv758LFqGbq0sy6%2FNB2gK4Lv98GI0K3IdQfzm1VRZBYq7HZ3i7IxCcJGsWyvJMXtimPGURTR%2BlRJtnrHskDx9hAZt1id05NYA%2FKcis6Gmq1bu%2FzGxm1pOCrO7PRDlii0E69wMLqFxckGOqUByaZKREgPvojo3d7ZHs0YBCXwKPXI8a7rfsI7gloEDx1%2B8k7lOeERbGjB86OETdStCSrJYse8JFkc0buXQt%2FQ9VBZ7D4VC7qgwkDCU1%2F%2FRR4udF5Jv6smQF6UxpjkjiM96daFwlFafv6P0oot5VU0fL9IlsAq6UUKsy71Bdi5LniVswmsBu8QUZwFjSBl3vmmiiOojcav8Wyis1oeT%2FWjljUKC4Hc&X-Amz-Signature=9d285935f41977b4311c26004a942c5c3dc400234a9769e2406c51f255a72a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7KGPYA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCm%2FU9KqcNzi4Yr78KDcwOBVS4WzDMmnTZkUUbtObNYDgIgbcINGdRGglg14rxpL3zsCzB%2FZTXkbGzqr0R048%2BD%2FyMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL8OrEDxD2wg5Zr%2BoircA8vknQk44wYVR08S8eN3ywRqktB6ub7fgEAt78dDz9qEs2U%2FEZJ9ZTbmCM2LVjQ1OQX9NY7fUNXCZmZ9dODbat2DctalC8Xoqp1u1p376Np6SSx8IGQ36UhPUbyk2wI6Puf32%2FWyskiAnYJd4TOLDN31imumhLeLV9LsPwlzDGut2U75evCsJGBFjnCFk1RRPrFXMosrqyHa1rHT2%2BzzAQL7fJXvOR%2BIRAW3e9YJ2FtabYLcB3Ogdw6oCoc6xrhDUQOQ2UEA%2BsypPOoPxmj2RqrtLk2L4GsJDI3HtgdfgTDQkyCXfKXoA4qIuO9YfBGIgtiW6mMirqiv5G1w8LcvDdBgr8j%2FkFotS5%2FN7m%2FSe8jA55uxegDUzQ2TC2z7rQnVsl1XesfN6xU9XPE8EFdn43er54k0HY44L8yJWaF3I8ZyRikcF59LIOHic1RSdHxFLLW0TcTQVZgVrx1RGYdvDU4bIgtOWBorVXVV8Y8o1cfT8j%2FRmK8SSezFgv758LFqGbq0sy6%2FNB2gK4Lv98GI0K3IdQfzm1VRZBYq7HZ3i7IxCcJGsWyvJMXtimPGURTR%2BlRJtnrHskDx9hAZt1id05NYA%2FKcis6Gmq1bu%2FzGxm1pOCrO7PRDlii0E69wMLqFxckGOqUByaZKREgPvojo3d7ZHs0YBCXwKPXI8a7rfsI7gloEDx1%2B8k7lOeERbGjB86OETdStCSrJYse8JFkc0buXQt%2FQ9VBZ7D4VC7qgwkDCU1%2F%2FRR4udF5Jv6smQF6UxpjkjiM96daFwlFafv6P0oot5VU0fL9IlsAq6UUKsy71Bdi5LniVswmsBu8QUZwFjSBl3vmmiiOojcav8Wyis1oeT%2FWjljUKC4Hc&X-Amz-Signature=24adffb62fdcb62152d65c4375787b3772ef116ba1b8364a799322f91c53b914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

