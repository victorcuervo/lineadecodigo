---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VV7IXL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCSJq%2BGJ1Skk7eX%2FL%2FfdtOMmsMGzaCvXlHQhgeAQ8psWgIgFsbZt8okG52Pww%2BQvP4xAd4UTt7%2BjF0GLdRISvSCDFIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCON9seHT9qck4M2nyrcA2kPoTx5MGo33tV%2F7M2tq6Ms6peek%2BnnKKEHw4TsTZS56IIysffCK1fTCIAO2zUcHC%2BizWuqyHq8ZZOFeBMERrFP0M2%2Fn4PAecfKk6O6ErDZo9Q%2FLmyM2TGDmNxBMPvIPL70l%2F3FBiyAYRTW03Kh9F9rwQUWdS8hu9ViGSUIalnaD%2FNBhwduUmNcrwYfV9ZoQT531m3FTLcLjxw2b1lB75Yn3USr5Wfb8ZgKloyCkYlgCvEZg4yBFkjFAp1HsPCEEdo4DTBSIl5FMh%2FRd7saFwRqGbancqAv2Upua029rzQv11eaYQK9nm%2BBjys0fRaInpnu7ZnT6Etpf9pUXTK2ud3N8L43GWRJLwUojAJ7P%2BIe0DOdpj%2FHX3bQHHCgdOFZd465R0ubJ6XfJUpP%2FE3%2BRbB5DTWbufu%2Fbb9pI1blKTaU%2FSKuhltqPDqOxbtXgE%2FFPLExDwmB1LnpoBgXn5ji6haNZqAEqQYKEs68Biw40Qt%2BSsNCVSCdk8CKovGF5D3gqGIB8nojyWevMviY1%2B5dfgqQLUaZM4TulaFNG2Ylt8pTiH3yQttNuW91aruhYB9tBhn6D9Ap45Y%2FstKJPATsnhNQh9WwVHqnS5nQtbSQ9eLhQl%2B6FKEPhTwaaaMJMNa%2BxskGOqUBYINBiAJv%2FNaU%2B8eXAAz%2BEEJ6GRK9ePklKkA1Vo%2BbJ9tav4lR4Y9tQjhlJWV%2FKiyJDcKPdPoCyaE%2FEfIj5kM91FlynweSt2EQAS%2BcvqXWhlzwrX99VkI4b8KVA9DO2GqdlJlaJNaAxsOtkAexPxqtheuY2lS8HFKnukMxNNvDuJlUUPpKCiQtf4Clek8VJNOwhfl3ebfI2Ur8vVrQzsgtdjRd7Rvn&X-Amz-Signature=4fc93107dd18583dc33c848966015fb2413a5e8d3d116a828f86f568d32e90b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VV7IXL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCSJq%2BGJ1Skk7eX%2FL%2FfdtOMmsMGzaCvXlHQhgeAQ8psWgIgFsbZt8okG52Pww%2BQvP4xAd4UTt7%2BjF0GLdRISvSCDFIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCON9seHT9qck4M2nyrcA2kPoTx5MGo33tV%2F7M2tq6Ms6peek%2BnnKKEHw4TsTZS56IIysffCK1fTCIAO2zUcHC%2BizWuqyHq8ZZOFeBMERrFP0M2%2Fn4PAecfKk6O6ErDZo9Q%2FLmyM2TGDmNxBMPvIPL70l%2F3FBiyAYRTW03Kh9F9rwQUWdS8hu9ViGSUIalnaD%2FNBhwduUmNcrwYfV9ZoQT531m3FTLcLjxw2b1lB75Yn3USr5Wfb8ZgKloyCkYlgCvEZg4yBFkjFAp1HsPCEEdo4DTBSIl5FMh%2FRd7saFwRqGbancqAv2Upua029rzQv11eaYQK9nm%2BBjys0fRaInpnu7ZnT6Etpf9pUXTK2ud3N8L43GWRJLwUojAJ7P%2BIe0DOdpj%2FHX3bQHHCgdOFZd465R0ubJ6XfJUpP%2FE3%2BRbB5DTWbufu%2Fbb9pI1blKTaU%2FSKuhltqPDqOxbtXgE%2FFPLExDwmB1LnpoBgXn5ji6haNZqAEqQYKEs68Biw40Qt%2BSsNCVSCdk8CKovGF5D3gqGIB8nojyWevMviY1%2B5dfgqQLUaZM4TulaFNG2Ylt8pTiH3yQttNuW91aruhYB9tBhn6D9Ap45Y%2FstKJPATsnhNQh9WwVHqnS5nQtbSQ9eLhQl%2B6FKEPhTwaaaMJMNa%2BxskGOqUBYINBiAJv%2FNaU%2B8eXAAz%2BEEJ6GRK9ePklKkA1Vo%2BbJ9tav4lR4Y9tQjhlJWV%2FKiyJDcKPdPoCyaE%2FEfIj5kM91FlynweSt2EQAS%2BcvqXWhlzwrX99VkI4b8KVA9DO2GqdlJlaJNaAxsOtkAexPxqtheuY2lS8HFKnukMxNNvDuJlUUPpKCiQtf4Clek8VJNOwhfl3ebfI2Ur8vVrQzsgtdjRd7Rvn&X-Amz-Signature=8955cf4a654bb3fc23dade3147ac1e70267760ca223716358595f5cbd08f2296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

