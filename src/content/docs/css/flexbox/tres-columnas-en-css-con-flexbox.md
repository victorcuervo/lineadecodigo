---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y6XFGMI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsuXP6r7Cul%2BW1fP%2F99k72VneAhVFn8gDnLL%2FCrWYFnAiASR8emUOzyYPvxVwLjnIVUlit4PwaHPXmnEssO2tMzgCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGi4mPuUNfci0Rh6PKtwDgWIYsrFV0XL33aWR7jDFr4ruY2spBb0zUoJ7lNrpLFbF43KNXxX2JuHHfF6yLw%2FQ%2FaV%2FCwYKwtQecbLDC2cN9suDn%2FP3euC2X4MXTyu%2F%2Fj8A7yBqpHzaUVYN0VwIKyU6xSJhFDqHTMnhPhAYVzF3hyq09Va0MFCK3vNwLG7iqXLqXONqjD%2FbAKQ%2F84kfWH6RzgRuLIHarFatRJ551QEWufjGkkgplkWBQ1RYnemCG4cKNMGaHGqp4akcvNbC%2FNErqpDuO1rb9gokJsn9FnUqf%2BAuOEEv2FaPUGkKLpvhZTuW4%2FLbsxTCUYQcIPtCIc241H7ykUnxT9H7UEUbzFJUxSwzQrIulpjeQIPakS9yMqvle8p50VJxZ%2Br%2B39k9kLvxsc%2F1tS8wgm8zZIu5G%2FNYJ%2B0Ablug0YnOBdZdP%2BBItS%2BRlgfOTIkuPQ1XLImMR67bbxq%2FvraH%2F%2BqKlWjyGTELrJ8x7b9CKLpwxYCqqIpNb4jClNi5n8mouqdHyjOEsNb2kxvjH5y3F1hUWOycfMeWOwEO1gZpkm4DMuc8BuUxZshttVL1OAoNwJTVBanm1fx%2BFWeJxtMWekFxth1neSGtffiY3fd5SDWgkj7lWZV7CX4gG5NAA0HEmihaDhYwp%2B3ZyQY6pgGzf2L%2Bm%2FXeHR4ozHAiWCCifk6zd6jW3M7hwFwK3hqZiklsXB55kMs2UgihZZgDmXh5QIvqVsu0V06ZXdsI9RfQTXtq0DAEL6KyCNaMbXvtuUWDuzbu%2FOPOiZuS%2B3pORVNj6NqwUhs1nXmB%2BGevfT8oMH50fwBn%2FeqFRs72ZL7Snz4n7PouRPgUqXT9Y2UB14IDZjAU9hookmDr30G2nq8KJPEuk%2FQv&X-Amz-Signature=8201ad3a54e3711e4cdfae509af20427a2059fa18b09bb976fa0da1414e7e760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y6XFGMI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsuXP6r7Cul%2BW1fP%2F99k72VneAhVFn8gDnLL%2FCrWYFnAiASR8emUOzyYPvxVwLjnIVUlit4PwaHPXmnEssO2tMzgCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGi4mPuUNfci0Rh6PKtwDgWIYsrFV0XL33aWR7jDFr4ruY2spBb0zUoJ7lNrpLFbF43KNXxX2JuHHfF6yLw%2FQ%2FaV%2FCwYKwtQecbLDC2cN9suDn%2FP3euC2X4MXTyu%2F%2Fj8A7yBqpHzaUVYN0VwIKyU6xSJhFDqHTMnhPhAYVzF3hyq09Va0MFCK3vNwLG7iqXLqXONqjD%2FbAKQ%2F84kfWH6RzgRuLIHarFatRJ551QEWufjGkkgplkWBQ1RYnemCG4cKNMGaHGqp4akcvNbC%2FNErqpDuO1rb9gokJsn9FnUqf%2BAuOEEv2FaPUGkKLpvhZTuW4%2FLbsxTCUYQcIPtCIc241H7ykUnxT9H7UEUbzFJUxSwzQrIulpjeQIPakS9yMqvle8p50VJxZ%2Br%2B39k9kLvxsc%2F1tS8wgm8zZIu5G%2FNYJ%2B0Ablug0YnOBdZdP%2BBItS%2BRlgfOTIkuPQ1XLImMR67bbxq%2FvraH%2F%2BqKlWjyGTELrJ8x7b9CKLpwxYCqqIpNb4jClNi5n8mouqdHyjOEsNb2kxvjH5y3F1hUWOycfMeWOwEO1gZpkm4DMuc8BuUxZshttVL1OAoNwJTVBanm1fx%2BFWeJxtMWekFxth1neSGtffiY3fd5SDWgkj7lWZV7CX4gG5NAA0HEmihaDhYwp%2B3ZyQY6pgGzf2L%2Bm%2FXeHR4ozHAiWCCifk6zd6jW3M7hwFwK3hqZiklsXB55kMs2UgihZZgDmXh5QIvqVsu0V06ZXdsI9RfQTXtq0DAEL6KyCNaMbXvtuUWDuzbu%2FOPOiZuS%2B3pORVNj6NqwUhs1nXmB%2BGevfT8oMH50fwBn%2FeqFRs72ZL7Snz4n7PouRPgUqXT9Y2UB14IDZjAU9hookmDr30G2nq8KJPEuk%2FQv&X-Amz-Signature=b00e489f37c6907d1b24f9c35796684d512986f4daf98b01ebde1d869bf89bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

