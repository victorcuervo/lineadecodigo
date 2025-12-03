---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAQNWSF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEW51WkzYjU3x%2FBoaog5kRGnyKojIbXPEhlur58TSTEsAiEAqgybQ2GLDZyKevUXXPMGgSRtKxP9nYMcrtstjB%2Bkrc0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJpAwLsXPy4jxJrAiSrcA0O6bSWizVhJXrHDfejXItbeTx6SFsJNU2E%2BdzDXVgE%2F1w6mqWdGPNa4T0u%2BwmjlGUEVFOZ6PCx8kZLvdPdzE6%2Fq9PuuddLB5jJbUG9sKZa2sj%2FeMwyOc4%2BtvTS1kq%2B1yYyP2FQUotL5nyCWE5VU%2FIwxlxLn6NoUrm94XnRxExhlAamoRxi6Be%2BxUDtd%2Fidr%2BFu1FusHyB6mBAX2yy5WDCvJcO0doMOhY%2FR32cJ0cen8EbXIH6UPFBdXlT2MIYMPdcnDdl2q6HMt5wWBNx2p61QrksbNIYc6%2Bi5SckR7nN%2Bv40v0IExaO05bjCsmts%2F0RxlYWxEri1WxNJc5VeYljkX6lCrF4vUFcJR1FIXRZgQKIOLZfsBlHgI4b1bGV%2BNId1hQ9f2QBpUcBArWaM44K0QCcmYYFtZ7U4Ki%2BzW85agQSDHdqAaEzbRj0EaDo06tztcWzxRfKqpjt0b2Ze%2BV0DhfFz%2FeF%2BYYO6Hdc9zwJbZ01iN2cFesuiD%2BcKqKUTcauMCzPdLQPOFXYO%2BksKbf4dyMEOj7oD5p0aM%2Bh2s%2BK3xq1TXFJiWAuC4T%2BDpfd9tgbAQ2rsid0oVZgFBC4eb%2F1zJMxlAq%2F1dtSfM7slvRpLv%2FWrnyicILVtDpUTLwMNSUvskGOqUBYvBlsl5bdnizlvIHDlKMBp1Odl79BGyzPFG0eUsZ3SIX%2FCxy9hMV4WEmB1DpwvELMWBYyQr44oYIMc2mBSFkIrPsetoPvI72BsI5sp%2FzLZz1RXtzylenmq1WhCH6BwwReFU1j6r9zX99OicfXd0PLJDoS9p%2BcV3Ttc4qRMYnV%2BGA7MdnqSxZ7OMIPtxZzdRggJca%2FeDoPeMmjb0Zrq%2Bon31eWRn1&X-Amz-Signature=2c1af1edaceac2a4854a06dfce0de640e93612f364c70bdc4ec7061773a45d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAQNWSF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEW51WkzYjU3x%2FBoaog5kRGnyKojIbXPEhlur58TSTEsAiEAqgybQ2GLDZyKevUXXPMGgSRtKxP9nYMcrtstjB%2Bkrc0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJpAwLsXPy4jxJrAiSrcA0O6bSWizVhJXrHDfejXItbeTx6SFsJNU2E%2BdzDXVgE%2F1w6mqWdGPNa4T0u%2BwmjlGUEVFOZ6PCx8kZLvdPdzE6%2Fq9PuuddLB5jJbUG9sKZa2sj%2FeMwyOc4%2BtvTS1kq%2B1yYyP2FQUotL5nyCWE5VU%2FIwxlxLn6NoUrm94XnRxExhlAamoRxi6Be%2BxUDtd%2Fidr%2BFu1FusHyB6mBAX2yy5WDCvJcO0doMOhY%2FR32cJ0cen8EbXIH6UPFBdXlT2MIYMPdcnDdl2q6HMt5wWBNx2p61QrksbNIYc6%2Bi5SckR7nN%2Bv40v0IExaO05bjCsmts%2F0RxlYWxEri1WxNJc5VeYljkX6lCrF4vUFcJR1FIXRZgQKIOLZfsBlHgI4b1bGV%2BNId1hQ9f2QBpUcBArWaM44K0QCcmYYFtZ7U4Ki%2BzW85agQSDHdqAaEzbRj0EaDo06tztcWzxRfKqpjt0b2Ze%2BV0DhfFz%2FeF%2BYYO6Hdc9zwJbZ01iN2cFesuiD%2BcKqKUTcauMCzPdLQPOFXYO%2BksKbf4dyMEOj7oD5p0aM%2Bh2s%2BK3xq1TXFJiWAuC4T%2BDpfd9tgbAQ2rsid0oVZgFBC4eb%2F1zJMxlAq%2F1dtSfM7slvRpLv%2FWrnyicILVtDpUTLwMNSUvskGOqUBYvBlsl5bdnizlvIHDlKMBp1Odl79BGyzPFG0eUsZ3SIX%2FCxy9hMV4WEmB1DpwvELMWBYyQr44oYIMc2mBSFkIrPsetoPvI72BsI5sp%2FzLZz1RXtzylenmq1WhCH6BwwReFU1j6r9zX99OicfXd0PLJDoS9p%2BcV3Ttc4qRMYnV%2BGA7MdnqSxZ7OMIPtxZzdRggJca%2FeDoPeMmjb0Zrq%2Bon31eWRn1&X-Amz-Signature=c86338c4d3b5fa58c209372642dcf469f35ace3f5f4606c5182c6bf4b5228b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

