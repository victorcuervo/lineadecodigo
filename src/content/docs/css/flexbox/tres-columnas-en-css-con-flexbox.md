---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DQL5KA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeuCW%2By7MAC4rQdftdWlkS7YohVI4QoP49q0Co7IAZgAiEA%2F3KZxFS0Ue08%2FKiBQ7BQW30WLhMlJJAOLEYXFmsmO8YqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1DHQXA0Pj60aif2yrcAx3khr6zUai2Iy9qg3McgqmeK5VJQ2lggTi%2F8Xsf3LqRHiXrA9s4t%2FZ2lSX7Mx%2BC%2B9R9gJ0yRrQ8BxbpQdrKZ9Ibm0s9WpKy8ukn0xvndAlh8pFxlOl3UUQSSSmEf7UyI0kjnYkmJywiO1a15toJ4gRD34UWX4N8fHTt4PRsFZ1UIAmK6hBed%2FWqKJNm1QX%2BtBYX3EsTCeoN9HpZdLNKuBt6abyzPmJCjx8ryM0qm6Rl85QVZTm%2B7SNJKb73QKlFYH8g9Z0EnxbVjQgXITo38N3%2FBTAZ5rFLHuZDMvHYKb9JaCg%2BPSOaYB3%2FQNOA%2B5%2B4NN3n%2FfCQtoK3z5uKffnEWsDcaVIxDhr6fjzH%2Bht5i%2FOegKwGH5MYJ4dFkYz8anKPe5Gecp%2FAv741AvEBmTQ9j2oMVuLzmxqTmzbUAq48%2BV0ZXJsYZkK9GnjFCSCCK2JKpcPMK0rrjfdC8feqhIGk9oeMLDaeU88f2DCDkMwOCiSRJ1U%2B%2BrbKxlZ8R5z1h5rpNRPRUrI%2F%2BOkII55KSA3SGiGVgVtnqKKxIn2uS7h09tO8uYQQG2OjKg%2Bj1sAFVrVhV%2FENfRXISJDF4F%2FxzPXfd%2FIzd0RLiabk9J1nQcWMZMGHEuKAWBTWf5iHKFTfMP3p3ckGOqUBUfotFmHkSzL3RY4QcpXVx1%2FfEtsELorl4%2F8x5FmCZlXkery1jO4H8n%2FDlQc0h%2FN8NcDFKjnWx8ohC0%2FKSkMoYfP8bP4up5SfFp%2FM71UAJ7BgtZiBqepI7wCQlpMAP%2BPMeiiaZICjabn3UaruYIMe9jm7XpV1FHsVzuLBUv8JYqyUEN%2BFF%2BQTKLiHve%2BD%2Fbe%2FiH%2BRTDlUnjkcLTJUj3T2dru5wG2t&X-Amz-Signature=ad0629df6c66009a5a1e91376c5b207fd05d396adaa8cbb2ea47143859e5958f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DQL5KA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeuCW%2By7MAC4rQdftdWlkS7YohVI4QoP49q0Co7IAZgAiEA%2F3KZxFS0Ue08%2FKiBQ7BQW30WLhMlJJAOLEYXFmsmO8YqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1DHQXA0Pj60aif2yrcAx3khr6zUai2Iy9qg3McgqmeK5VJQ2lggTi%2F8Xsf3LqRHiXrA9s4t%2FZ2lSX7Mx%2BC%2B9R9gJ0yRrQ8BxbpQdrKZ9Ibm0s9WpKy8ukn0xvndAlh8pFxlOl3UUQSSSmEf7UyI0kjnYkmJywiO1a15toJ4gRD34UWX4N8fHTt4PRsFZ1UIAmK6hBed%2FWqKJNm1QX%2BtBYX3EsTCeoN9HpZdLNKuBt6abyzPmJCjx8ryM0qm6Rl85QVZTm%2B7SNJKb73QKlFYH8g9Z0EnxbVjQgXITo38N3%2FBTAZ5rFLHuZDMvHYKb9JaCg%2BPSOaYB3%2FQNOA%2B5%2B4NN3n%2FfCQtoK3z5uKffnEWsDcaVIxDhr6fjzH%2Bht5i%2FOegKwGH5MYJ4dFkYz8anKPe5Gecp%2FAv741AvEBmTQ9j2oMVuLzmxqTmzbUAq48%2BV0ZXJsYZkK9GnjFCSCCK2JKpcPMK0rrjfdC8feqhIGk9oeMLDaeU88f2DCDkMwOCiSRJ1U%2B%2BrbKxlZ8R5z1h5rpNRPRUrI%2F%2BOkII55KSA3SGiGVgVtnqKKxIn2uS7h09tO8uYQQG2OjKg%2Bj1sAFVrVhV%2FENfRXISJDF4F%2FxzPXfd%2FIzd0RLiabk9J1nQcWMZMGHEuKAWBTWf5iHKFTfMP3p3ckGOqUBUfotFmHkSzL3RY4QcpXVx1%2FfEtsELorl4%2F8x5FmCZlXkery1jO4H8n%2FDlQc0h%2FN8NcDFKjnWx8ohC0%2FKSkMoYfP8bP4up5SfFp%2FM71UAJ7BgtZiBqepI7wCQlpMAP%2BPMeiiaZICjabn3UaruYIMe9jm7XpV1FHsVzuLBUv8JYqyUEN%2BFF%2BQTKLiHve%2BD%2Fbe%2FiH%2BRTDlUnjkcLTJUj3T2dru5wG2t&X-Amz-Signature=bc610d40e421271b9998c0aa0a484dd9dd0ed773526648416ff9e205c71679dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

