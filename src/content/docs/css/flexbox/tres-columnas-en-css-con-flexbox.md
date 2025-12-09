---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IE5FRY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMfRUxn9mHdci%2BHBaj3CuLmbcN2dj%2BOU6NepBfcql2UAiEAi91BwiIids1ZzmIPO%2FaqvtKPcZ%2F91n1r4Jp5DBjuDYAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0YjKM9xpSuau2%2FhircAwTx7wC9eiKSbDWNatjAoY%2Bja8UxPJdSI%2BfJfhTGjpz0g18KYb3vYZ7BrqF4MCyiXAPChofCO2vqDvqzeZqTz%2BjkX5IHpNYfef6%2FxncOa11EAh4Q6g%2BSoWAKchB7VJ%2BIZhvrRXVT%2Fm%2FH6UfjyuVxUl3yAI98AINygVrf%2B4r5MVabTBaD7Vvcxmyy0GOc8N4wXEO30OkmIvRntvFyM7b3WSg642oh3wSj%2BEzh9kTIQtoBQ0sNwDCmtZ7%2F58x8mKKB8iM%2BRnAmjnK1%2B3YOC6AZ4V6exub%2BKln2IPbxzCQmPxMTa%2FIYzZshS%2BnM39dkSVPkiyPh6uvvnTDiuQJrjz2osZpRQWyo9CGGF54gHumbQt0S83ThGM8B0u4uyXNZVmMpZuLlyrfkvIVfwhdjv0QGfcivaYbTT7R3mRmjXUlKV2PM%2FwCBWTiKRyNSubHLTciMUjkwFbZcntyc01x1LgNzvVRMHfnz9EpDgigfBPUUJajHuNaxQSD93dJrEDl0NGh03k3QE0D4JXxBcS1AEu5DTBiLxNSb9KLYOIg%2F7uybtGFw%2BTurG7BZtHGUzClMWidy%2BjaIkiH2lEU7UDY9ohP1la1y4%2Fh0tqz%2Bn7uQmHpR%2BpnqVHRwplZvgWu9NwEBML%2FE38kGOqUBtgT2n8xuxFSFCcw3LBhpBpArNTAOwj7DHCQRJe0Lw1SpgJmZFg2SyM4%2BHCq57znLaaWDrFkL7CXkoIifIR07P9Lha1M8JFGUi9%2FpM%2FitAvweNwR4jq%2F5iiN9iDiKQuitLu0exCV%2FMEfQuf%2FIcKVb6BO3Aysp9lUhpWbeJMQwmdLVjkKU%2BBWM96SDFVQreDhYG%2F9unIPXnuZKS%2Fv0J31Hg5F02d93&X-Amz-Signature=0c10eb468084b78e626a3ec4b2944bbea38b2cbd2f52a204c1454a42469d5a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IE5FRY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMfRUxn9mHdci%2BHBaj3CuLmbcN2dj%2BOU6NepBfcql2UAiEAi91BwiIids1ZzmIPO%2FaqvtKPcZ%2F91n1r4Jp5DBjuDYAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0YjKM9xpSuau2%2FhircAwTx7wC9eiKSbDWNatjAoY%2Bja8UxPJdSI%2BfJfhTGjpz0g18KYb3vYZ7BrqF4MCyiXAPChofCO2vqDvqzeZqTz%2BjkX5IHpNYfef6%2FxncOa11EAh4Q6g%2BSoWAKchB7VJ%2BIZhvrRXVT%2Fm%2FH6UfjyuVxUl3yAI98AINygVrf%2B4r5MVabTBaD7Vvcxmyy0GOc8N4wXEO30OkmIvRntvFyM7b3WSg642oh3wSj%2BEzh9kTIQtoBQ0sNwDCmtZ7%2F58x8mKKB8iM%2BRnAmjnK1%2B3YOC6AZ4V6exub%2BKln2IPbxzCQmPxMTa%2FIYzZshS%2BnM39dkSVPkiyPh6uvvnTDiuQJrjz2osZpRQWyo9CGGF54gHumbQt0S83ThGM8B0u4uyXNZVmMpZuLlyrfkvIVfwhdjv0QGfcivaYbTT7R3mRmjXUlKV2PM%2FwCBWTiKRyNSubHLTciMUjkwFbZcntyc01x1LgNzvVRMHfnz9EpDgigfBPUUJajHuNaxQSD93dJrEDl0NGh03k3QE0D4JXxBcS1AEu5DTBiLxNSb9KLYOIg%2F7uybtGFw%2BTurG7BZtHGUzClMWidy%2BjaIkiH2lEU7UDY9ohP1la1y4%2Fh0tqz%2Bn7uQmHpR%2BpnqVHRwplZvgWu9NwEBML%2FE38kGOqUBtgT2n8xuxFSFCcw3LBhpBpArNTAOwj7DHCQRJe0Lw1SpgJmZFg2SyM4%2BHCq57znLaaWDrFkL7CXkoIifIR07P9Lha1M8JFGUi9%2FpM%2FitAvweNwR4jq%2F5iiN9iDiKQuitLu0exCV%2FMEfQuf%2FIcKVb6BO3Aysp9lUhpWbeJMQwmdLVjkKU%2BBWM96SDFVQreDhYG%2F9unIPXnuZKS%2Fv0J31Hg5F02d93&X-Amz-Signature=96dec837eba6833deb7e4f61b13d4a61708fa03ecb9c6d2706275015fde4b2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

