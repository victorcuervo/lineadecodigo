---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SBIMQHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BfEKx2lBuspv%2BzRJ8wYpy%2FOCgcx6VmGgpLPx3uTRO7AIgM0jhBkoxZPnLRHiYGn%2BDejpiUzaOW5N%2FpS7nGukb1J4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKm7XnzCvecZeywMFCrcA2XzaPCiZLcqixXaC4OGauszq7iq8oDCWD%2FAFV9w91Zt9rQdZHLwOxAvdZkH0TZ8SLCgOmUImFJud%2F4IpRawCDg6NzwCKU%2F13Jj4O85Wdp1anJlaGrKAVAL4%2BLiIwR3%2BFXNgbQwqOUUXgiuBHqSRi8xB9rRH%2FOpK9Y71LdgBggHevpriD%2FOB01ZAy1aWbkKE%2FAKqTC6T7ul2fTlhLoyDqE5sPYL9jRE%2Bvr2P6EN0kzGdNgyJKkm97Ev6lYoFqUhBzIBwM34NMOG594QytInzlW%2F7UC%2ByBfsHc%2BHrYVv%2BTY032%2FnQprxGCOYOhHCe9DCc6icNlS2eUuukHHheih54JD9cU6wMQws3bz1oj%2FMe75UN%2FrUVLgdPPZYbUAqba1US6x0C3htZIsSKVrxirEvrN%2BbfmZSN%2F%2FJTUic%2BgYnjObypHb07vT0sI32yVkwP5KyAwp6dceriZ8zFpdpcC9AFR67WKwWvD8FFs38Xl0SNfFjmkm8a4IhJjGU0ILtTSYtr88cVShelYs8nw%2Fz8DuykXBhKw%2Bu%2F2yRCdVSnC7H0VfYSq%2FHEU2GMXP9x80XpOefBXTKrkArX%2FxoC3x0lxZd0YKh3OD4I7mDHL%2FjBwfYKhjlP%2FV9P02maBFq1HdzgMM3DzskGOqUBJCOotVyLFlPswk08ACkgq7of4m3jDPuN6en%2BES0wIY0YjjQ1KYm1pUeWJzoda1vbAhEYD7olrx5SKgahB4QTHzw14moq2Q2lNtA0wTuU3Ob2ij6T3QO07VCiED1kcpubuv4ckK7dbrQL1urVqY30fMt1kOo%2FFHweU7YtiYpNXIfxddn80OPyiS0AItghL4%2FtF7ZjcZnbaUZDyCynffv8nb32%2B4JU&X-Amz-Signature=4912ab8bf1d5a961fcc478943a9d5e2dfeb37c8b391ecc11b0a1aa7386a5829b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SBIMQHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BfEKx2lBuspv%2BzRJ8wYpy%2FOCgcx6VmGgpLPx3uTRO7AIgM0jhBkoxZPnLRHiYGn%2BDejpiUzaOW5N%2FpS7nGukb1J4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKm7XnzCvecZeywMFCrcA2XzaPCiZLcqixXaC4OGauszq7iq8oDCWD%2FAFV9w91Zt9rQdZHLwOxAvdZkH0TZ8SLCgOmUImFJud%2F4IpRawCDg6NzwCKU%2F13Jj4O85Wdp1anJlaGrKAVAL4%2BLiIwR3%2BFXNgbQwqOUUXgiuBHqSRi8xB9rRH%2FOpK9Y71LdgBggHevpriD%2FOB01ZAy1aWbkKE%2FAKqTC6T7ul2fTlhLoyDqE5sPYL9jRE%2Bvr2P6EN0kzGdNgyJKkm97Ev6lYoFqUhBzIBwM34NMOG594QytInzlW%2F7UC%2ByBfsHc%2BHrYVv%2BTY032%2FnQprxGCOYOhHCe9DCc6icNlS2eUuukHHheih54JD9cU6wMQws3bz1oj%2FMe75UN%2FrUVLgdPPZYbUAqba1US6x0C3htZIsSKVrxirEvrN%2BbfmZSN%2F%2FJTUic%2BgYnjObypHb07vT0sI32yVkwP5KyAwp6dceriZ8zFpdpcC9AFR67WKwWvD8FFs38Xl0SNfFjmkm8a4IhJjGU0ILtTSYtr88cVShelYs8nw%2Fz8DuykXBhKw%2Bu%2F2yRCdVSnC7H0VfYSq%2FHEU2GMXP9x80XpOefBXTKrkArX%2FxoC3x0lxZd0YKh3OD4I7mDHL%2FjBwfYKhjlP%2FV9P02maBFq1HdzgMM3DzskGOqUBJCOotVyLFlPswk08ACkgq7of4m3jDPuN6en%2BES0wIY0YjjQ1KYm1pUeWJzoda1vbAhEYD7olrx5SKgahB4QTHzw14moq2Q2lNtA0wTuU3Ob2ij6T3QO07VCiED1kcpubuv4ckK7dbrQL1urVqY30fMt1kOo%2FFHweU7YtiYpNXIfxddn80OPyiS0AItghL4%2FtF7ZjcZnbaUZDyCynffv8nb32%2B4JU&X-Amz-Signature=e1f1521be6cf3b6e78c3da0451b8c69f7ce43dfc511dafbca8a75d1a191df144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

