---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPYIXEC6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl4MKyJ27%2Bzy24brlgx%2BOWjhVUaCOJFJkgWdkiEoH2BAiEA1j0ti9B3UNLunOHCsACH1uyZc3eOFTFIYhoZmmB8xYIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFBz2Z%2BgiXIVAenvSrcAxrKtiER4wDtXAMYeN0%2BjeyoHeYsuneMnjmWZFufn8sq1l1f8jDNu8ueQ3iR0sq%2BdbCca0gnjRBcvwgp31RlQMefJ78vdEhQeY2AzzfHcGH%2F4PYRxckzebDy6Jlu5%2FnlKOnsVOnwDG6MInf4nRutNdawp9yWY%2FzyxFvPjmAMKZtVmyBpMDphFXLWMwubtn50G6g4R%2FF94OhQg54AgVzkXBH4uPg2YXjvNxQom3NslrwOqTP5MTBAITa9o50X%2FactBsE9mH5b3x4jImNXCYaIvYl9ENm2%2FKJVk3t%2BHl0%2BtZhwKoAEWbaRIfKfwZ7Uig1JID1Nhb3umEUxlwH9mD7KS5jD74bVqHttu5yEp41HWMH1HhYD8tbBwSgMoGTtW7GY%2B6UMi8qpTx5R9Dpw7%2FM5X27BYdzZaYwJwV9eK%2BTnWPks4%2FaN0YJToME95W9NlKzMW%2FZ53ahEX60P3zMFZFPqaLCEt%2F0CsGZSFPxRBqaL4%2FbKqOYH4bfQDwO9B0g3OLM8BnxIp0T0BMiLlRNGfa3dx4pdwbpE8BMoxjWjE9EXiyxg5kGGOqxmQ9WrJs0zu%2BUVxstOWY%2BslkE0cCAVmi3uUCAQI2cChLCpH%2Bu%2Bvb9ttK05uT5aJUNoSItB5LRUMKWQ28kGOqUBTZ6HwIR26oIs%2BF2gOcJP8cCyKVSsv0kgk594ZSJ7dCfi%2Fs%2FbcSdRInPfSYnlO200YuVCKfBRMXuJ3AAvUxaSeYvCYgpOupKdcrrGSFQecdQJmZKJgVnAH9J1C6nXkxERp2TUhETAxJr4%2FPMkZo5aZrBZ2CETOpY4deYYlT28nKi9xNRJL1%2BiORhHOgRW2zyLo5G%2Bkqf9s1GZXT2U9UwZuJm3ap8X&X-Amz-Signature=6a34c65bff49ca1fe3b6c54785017926f4072b22f0c1837a9a6765d1ceb1d51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPYIXEC6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl4MKyJ27%2Bzy24brlgx%2BOWjhVUaCOJFJkgWdkiEoH2BAiEA1j0ti9B3UNLunOHCsACH1uyZc3eOFTFIYhoZmmB8xYIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFBz2Z%2BgiXIVAenvSrcAxrKtiER4wDtXAMYeN0%2BjeyoHeYsuneMnjmWZFufn8sq1l1f8jDNu8ueQ3iR0sq%2BdbCca0gnjRBcvwgp31RlQMefJ78vdEhQeY2AzzfHcGH%2F4PYRxckzebDy6Jlu5%2FnlKOnsVOnwDG6MInf4nRutNdawp9yWY%2FzyxFvPjmAMKZtVmyBpMDphFXLWMwubtn50G6g4R%2FF94OhQg54AgVzkXBH4uPg2YXjvNxQom3NslrwOqTP5MTBAITa9o50X%2FactBsE9mH5b3x4jImNXCYaIvYl9ENm2%2FKJVk3t%2BHl0%2BtZhwKoAEWbaRIfKfwZ7Uig1JID1Nhb3umEUxlwH9mD7KS5jD74bVqHttu5yEp41HWMH1HhYD8tbBwSgMoGTtW7GY%2B6UMi8qpTx5R9Dpw7%2FM5X27BYdzZaYwJwV9eK%2BTnWPks4%2FaN0YJToME95W9NlKzMW%2FZ53ahEX60P3zMFZFPqaLCEt%2F0CsGZSFPxRBqaL4%2FbKqOYH4bfQDwO9B0g3OLM8BnxIp0T0BMiLlRNGfa3dx4pdwbpE8BMoxjWjE9EXiyxg5kGGOqxmQ9WrJs0zu%2BUVxstOWY%2BslkE0cCAVmi3uUCAQI2cChLCpH%2Bu%2Bvb9ttK05uT5aJUNoSItB5LRUMKWQ28kGOqUBTZ6HwIR26oIs%2BF2gOcJP8cCyKVSsv0kgk594ZSJ7dCfi%2Fs%2FbcSdRInPfSYnlO200YuVCKfBRMXuJ3AAvUxaSeYvCYgpOupKdcrrGSFQecdQJmZKJgVnAH9J1C6nXkxERp2TUhETAxJr4%2FPMkZo5aZrBZ2CETOpY4deYYlT28nKi9xNRJL1%2BiORhHOgRW2zyLo5G%2Bkqf9s1GZXT2U9UwZuJm3ap8X&X-Amz-Signature=fc1a60febc6da0240981213e1b203ae10b650654b1d71c196152e27b9067621f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

