---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4HCGRUW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGDj1pyaaA6H7V%2FFwiYP4uoSu3AMcZlM6o3Hysv7vVi4AiACR3q9rUrhDJxHaQSrrHk1S8pKrbGu3ncyFhxTJ3oi5Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMoFCD82W%2FpjsK6EzAKtwDgVjtocXXuGDqygxIg4eHumNVzZ1yUWCD8UIuqoXCIME%2BR6H6cS%2BjzHBdVO1sWLPuuuOmasyDklaowFzKlNqm84PZC4k%2BUfUcHuwnkCp3ui0J6%2FKeFVvRybGN%2ByebzQu64Yl7xP1LC0nEF65QtukfbV%2FedsefkmuS5waxioko4WFmxXOz9eCYFwRFpzvaNlO%2Bj6pvY1HCN8swSpVP%2F%2B138s5FmkZkXrsfSiTrFiIDxie7wQzJjgxumopHl977779v8sOgnLSDs2eU48YYnHmrCPdBEawBDhtrWGPG6UkAs5LhLeKGVfEoheGyiAKuBQdEBR24xpvlqrPB7nRlJg8mKUCi4dyZuCSK1kNAGNxx3EEDxOA%2B22nnY6kJKbI3KGJTYTppcvsownjJb0Jvvrb0Jcl3PbQZ6LYPBBRtDvH6xoC4486dDkHmZ35LWvqnE391eoS9%2Fgk9OpJ7Q7zuYox08gBDeB2HGZa1hhBAmIr9f8KiczK7yzJg2HP4bUz%2FXSthI3rgKieaNjxwItU4iHDJjcXJJsJ%2BwZjVhA6UbITZV4nlv5pb%2FOJf6Oo3tIKvpkOIYGM0S8Xetrw16%2FdU7qklbLquIG6%2BUU7QHeIzzgSrKneFI2RUUI2z2Py30eEw87TDyQY6pgHQn6%2FmevkfbHY%2F%2Fu%2BCsaKAyZAqh5y0BQXTrjR%2BKdKVeFvdLKLifAQpk667Fczl7XG5YIqVzPewxVFB2skQeSFJxnFATlJ%2BogePDNwgbBY0BUHp2kmgwFYG%2B9WlEYB6brXz2Z%2FTs36hOlqAJ6gAQmAtIPDU8RYjc4vNrp8u5zIBujn1boskmUTrZpksh93EvJapeXn4flZtZ0z36Hho8JUfu8NrVZ99&X-Amz-Signature=8b993281896a4fbdb5377339fcf34323ced5c5c8e2398e33ad259fc28805df92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4HCGRUW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGDj1pyaaA6H7V%2FFwiYP4uoSu3AMcZlM6o3Hysv7vVi4AiACR3q9rUrhDJxHaQSrrHk1S8pKrbGu3ncyFhxTJ3oi5Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMoFCD82W%2FpjsK6EzAKtwDgVjtocXXuGDqygxIg4eHumNVzZ1yUWCD8UIuqoXCIME%2BR6H6cS%2BjzHBdVO1sWLPuuuOmasyDklaowFzKlNqm84PZC4k%2BUfUcHuwnkCp3ui0J6%2FKeFVvRybGN%2ByebzQu64Yl7xP1LC0nEF65QtukfbV%2FedsefkmuS5waxioko4WFmxXOz9eCYFwRFpzvaNlO%2Bj6pvY1HCN8swSpVP%2F%2B138s5FmkZkXrsfSiTrFiIDxie7wQzJjgxumopHl977779v8sOgnLSDs2eU48YYnHmrCPdBEawBDhtrWGPG6UkAs5LhLeKGVfEoheGyiAKuBQdEBR24xpvlqrPB7nRlJg8mKUCi4dyZuCSK1kNAGNxx3EEDxOA%2B22nnY6kJKbI3KGJTYTppcvsownjJb0Jvvrb0Jcl3PbQZ6LYPBBRtDvH6xoC4486dDkHmZ35LWvqnE391eoS9%2Fgk9OpJ7Q7zuYox08gBDeB2HGZa1hhBAmIr9f8KiczK7yzJg2HP4bUz%2FXSthI3rgKieaNjxwItU4iHDJjcXJJsJ%2BwZjVhA6UbITZV4nlv5pb%2FOJf6Oo3tIKvpkOIYGM0S8Xetrw16%2FdU7qklbLquIG6%2BUU7QHeIzzgSrKneFI2RUUI2z2Py30eEw87TDyQY6pgHQn6%2FmevkfbHY%2F%2Fu%2BCsaKAyZAqh5y0BQXTrjR%2BKdKVeFvdLKLifAQpk667Fczl7XG5YIqVzPewxVFB2skQeSFJxnFATlJ%2BogePDNwgbBY0BUHp2kmgwFYG%2B9WlEYB6brXz2Z%2FTs36hOlqAJ6gAQmAtIPDU8RYjc4vNrp8u5zIBujn1boskmUTrZpksh93EvJapeXn4flZtZ0z36Hho8JUfu8NrVZ99&X-Amz-Signature=a69750317fc497bd49167dd2fea35eceea1cdb7f22f0f8447a534b3d7cd93caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

