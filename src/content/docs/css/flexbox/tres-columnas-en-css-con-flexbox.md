---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJR735Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYR7u%2Fy%2F%2BXsC6Y3zHNXrA%2BN4khSlv%2Bj87iYM0bJlViUAIgE5vl65qO2YqpgZD0xp4CGclCVvWpiyv6x6NT9Arc2tAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJHTVc2M3AHdQGk4ircA74iWofWSuv2FDjbDDeLY3Ede3HqdxnYpG2SDNs8kCFZY%2FGZzJ9P%2FocNmkPa28VaxAZPFfJUf9RdiOp%2F9AgGlhnf%2BfGP4etx3cYZH%2F1AcN5%2BdEISLlyql6hjoXBYMg%2B28P44Ji2nVZt3s0fj2jDlxs6yovtakCE6VHsCkpzF0X5CXOrTI3V1ytHPKmDNLaAf8UtZYMPqjMT5pfOKZpXkPNfYj%2FXYP4QbxHrCyM8t6Uf3gLx90lpDQNTM10Qy8ABl3VJhmJ4H7bFHZBItxgwLJobT7mgvPegliEBMFWeBSr5WQs58xn%2BHaVLESwdp%2Byv%2FlJY2vHXZZFBs9linTMs%2BLKiN3auvbNAvcQQf%2B%2BBgPljlTFCGOMU4uQ09%2FyRrDrzFAXy7sjVkpLmipXtiVqTPX4l1B8kYWd2Ez5KRgz%2F6GW6ysK3fMUM9IxzZocOvjNfoaPQd6tzLDPkjC4K%2BdGdjAIX5yKqyTiMb0PDiLcL8Osu25%2Flfen17MJub9GDJdNqAnFfwCw47jFBfq%2FcoGA0WB9M5nMQmk3bZLV9UjDD2AaBptUs7%2B15hH4ZCucenh61KIiQ2djksUvzQoZhUVp7MLtletWMiN8aX%2B%2B7lBaY2ANYJfX70x9LTECUQTUNxMKvE38kGOqUB3mEd%2Fcxwf8WcXXO3y6BNvB7vt6YJ1PZ%2BgupfgLasMkvdeyUpajHIt3y22Gu8%2FFCJDurvYJjWch31p%2FGZtcXpilf%2FkBKCjDV6%2F0OkpqkJa9ManaM18ajlxI8Marnk6%2Bzx7FvqoX0n3AeYRzIdRu%2Bew565sYPBkVZSqpt1trqzq6bC%2F6B%2FUbWu9W393QtnscBLkYe8N2GMRyj8cgLNetoU%2FxWjVvo6&X-Amz-Signature=aa3befd8d6bf971385eed27cd885c9524b82d88cc33a44b26570596341bfbe77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJR735Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYR7u%2Fy%2F%2BXsC6Y3zHNXrA%2BN4khSlv%2Bj87iYM0bJlViUAIgE5vl65qO2YqpgZD0xp4CGclCVvWpiyv6x6NT9Arc2tAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJHTVc2M3AHdQGk4ircA74iWofWSuv2FDjbDDeLY3Ede3HqdxnYpG2SDNs8kCFZY%2FGZzJ9P%2FocNmkPa28VaxAZPFfJUf9RdiOp%2F9AgGlhnf%2BfGP4etx3cYZH%2F1AcN5%2BdEISLlyql6hjoXBYMg%2B28P44Ji2nVZt3s0fj2jDlxs6yovtakCE6VHsCkpzF0X5CXOrTI3V1ytHPKmDNLaAf8UtZYMPqjMT5pfOKZpXkPNfYj%2FXYP4QbxHrCyM8t6Uf3gLx90lpDQNTM10Qy8ABl3VJhmJ4H7bFHZBItxgwLJobT7mgvPegliEBMFWeBSr5WQs58xn%2BHaVLESwdp%2Byv%2FlJY2vHXZZFBs9linTMs%2BLKiN3auvbNAvcQQf%2B%2BBgPljlTFCGOMU4uQ09%2FyRrDrzFAXy7sjVkpLmipXtiVqTPX4l1B8kYWd2Ez5KRgz%2F6GW6ysK3fMUM9IxzZocOvjNfoaPQd6tzLDPkjC4K%2BdGdjAIX5yKqyTiMb0PDiLcL8Osu25%2Flfen17MJub9GDJdNqAnFfwCw47jFBfq%2FcoGA0WB9M5nMQmk3bZLV9UjDD2AaBptUs7%2B15hH4ZCucenh61KIiQ2djksUvzQoZhUVp7MLtletWMiN8aX%2B%2B7lBaY2ANYJfX70x9LTECUQTUNxMKvE38kGOqUB3mEd%2Fcxwf8WcXXO3y6BNvB7vt6YJ1PZ%2BgupfgLasMkvdeyUpajHIt3y22Gu8%2FFCJDurvYJjWch31p%2FGZtcXpilf%2FkBKCjDV6%2F0OkpqkJa9ManaM18ajlxI8Marnk6%2Bzx7FvqoX0n3AeYRzIdRu%2Bew565sYPBkVZSqpt1trqzq6bC%2F6B%2FUbWu9W393QtnscBLkYe8N2GMRyj8cgLNetoU%2FxWjVvo6&X-Amz-Signature=593205c9e5150a27913a8f948fac9927541474d8f0496cd70366fd508fdc1b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

