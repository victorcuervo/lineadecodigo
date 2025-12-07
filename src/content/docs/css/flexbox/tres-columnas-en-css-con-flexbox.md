---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4H2SS4F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FenkyJH8N3URvp6CohU5Z%2Bqeo8zk1EzCJwRGlCdTygAiBSPJAav6aCTC3ToBcVr4hM5kuy3VL78d72rrYjji8xliqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFbKkgBvBBEh5%2F0wKtwDrwQ5a%2BB3Q18v4rCth1sFfc1UweFYhL9WW75UfvIvRDTh%2BSYD5fGsXLpZ1lDnGZWwnj%2BTaVL%2F%2FA5Fa9o4wNBxxNkrNqj1X3%2FgdKnYOngPD1YhecAwKy8zORF6D7fs1jkIJ2W01QzfKV3E7I5R5CuF4i9yd4xuTJLdmnYX9KvgMW9dwjQjX6zL0xPwdjk3%2BF%2BwYSf0804qVBYV2bvMF9lnfeIolASblUIEs%2FFml1HTN%2B%2Bvq2nUzAiE54BClClHjJEqVj0Vs6ZhL6BfZMeyVlQbF4LPOxIMKnhHfgIuT4mB3n3mrYk5kn%2BBmCvn5qY%2BqiMOU1j74trHkIW6PSDAvyrdh9K5zLh5fT1QatVrwtAoSXx4rbfL5l732hA9SRfAkFM2CJoxW7by1kkwDDP9E6Br3XeCgypCBWDmjzbzusWyS7BdAg%2FVyVJ1qogfvcXv%2B0m4wh5aajlFs8e2YraC%2B3EdZ5W4Fuy5MM%2BSaHQo1VDiSOIG5QSHO6sqjW7hPVDP1gnO3ikJwmpC9ftOTpPLVbjWoL8yJHMI%2BB45M2y%2BKmXOCecMEDBlxh2KvmTCCHIMb4WK09Tt2xuGycQ3if45CQ3o%2BqRB7bJlt%2BGpp8VPyX%2Bl98virbF7BJcUGW%2BarKwwrLjWyQY6pgFTSbstlQhVHr2uXnchNgpKfUlJxgmqkW6DhOWqHFo3BPXt0LCfjp3%2BqysuqX2Bak4%2Fq5RzXVCRDLtZfnq8ILM%2Fesj4GRbERlN4yx1bqL7%2BB5ZFkU29msviFOda0XBRaRJ%2FVN0DxtKV59erC2Rdr4mtXnSzy6V96jTlMwpHIwSZSFgK2gQbi3MJVe6L0tv9UgRnNFe9ALNbge5Hq3s5rxvpE%2FgLWjz7&X-Amz-Signature=8d8a5656b265170ca466728bdd4f20054722018113d26eb4f2997841ba2b54c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4H2SS4F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FenkyJH8N3URvp6CohU5Z%2Bqeo8zk1EzCJwRGlCdTygAiBSPJAav6aCTC3ToBcVr4hM5kuy3VL78d72rrYjji8xliqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFbKkgBvBBEh5%2F0wKtwDrwQ5a%2BB3Q18v4rCth1sFfc1UweFYhL9WW75UfvIvRDTh%2BSYD5fGsXLpZ1lDnGZWwnj%2BTaVL%2F%2FA5Fa9o4wNBxxNkrNqj1X3%2FgdKnYOngPD1YhecAwKy8zORF6D7fs1jkIJ2W01QzfKV3E7I5R5CuF4i9yd4xuTJLdmnYX9KvgMW9dwjQjX6zL0xPwdjk3%2BF%2BwYSf0804qVBYV2bvMF9lnfeIolASblUIEs%2FFml1HTN%2B%2Bvq2nUzAiE54BClClHjJEqVj0Vs6ZhL6BfZMeyVlQbF4LPOxIMKnhHfgIuT4mB3n3mrYk5kn%2BBmCvn5qY%2BqiMOU1j74trHkIW6PSDAvyrdh9K5zLh5fT1QatVrwtAoSXx4rbfL5l732hA9SRfAkFM2CJoxW7by1kkwDDP9E6Br3XeCgypCBWDmjzbzusWyS7BdAg%2FVyVJ1qogfvcXv%2B0m4wh5aajlFs8e2YraC%2B3EdZ5W4Fuy5MM%2BSaHQo1VDiSOIG5QSHO6sqjW7hPVDP1gnO3ikJwmpC9ftOTpPLVbjWoL8yJHMI%2BB45M2y%2BKmXOCecMEDBlxh2KvmTCCHIMb4WK09Tt2xuGycQ3if45CQ3o%2BqRB7bJlt%2BGpp8VPyX%2Bl98virbF7BJcUGW%2BarKwwrLjWyQY6pgFTSbstlQhVHr2uXnchNgpKfUlJxgmqkW6DhOWqHFo3BPXt0LCfjp3%2BqysuqX2Bak4%2Fq5RzXVCRDLtZfnq8ILM%2Fesj4GRbERlN4yx1bqL7%2BB5ZFkU29msviFOda0XBRaRJ%2FVN0DxtKV59erC2Rdr4mtXnSzy6V96jTlMwpHIwSZSFgK2gQbi3MJVe6L0tv9UgRnNFe9ALNbge5Hq3s5rxvpE%2FgLWjz7&X-Amz-Signature=71ff2fb1236cd54c08b3e3ad4e6452ff431060f7c33f77e2d5017435f46cfc99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

