---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JA4AOIG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJCThYTO7jxZmeEKkKGtnORu8fFIej5TagUjcypWnewIgCAUJmonWLoTQfb%2B%2Bm3%2FFnG6LtHDGqPfStpp7leVGxNkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnPBh84j7gAS7BhwyrcA5iN%2BL9zzocwO543Vcccwxx1Mp2Zn2U7WJTg3EIIfOjGBq855JA%2FMtmeMtDU3DLC4XwMnE8Fi7XdjQRhpxhFl9NhX66cQnesZ77i1MbtDzUpHBzkgd40JHoHeTPHbm2cospqgSC7bZUI%2FsUIg9LP0RNtUZWEfCs8VRvRqdbYnmWfrA7IhF3wGPSCN3Ufl2gEolR%2Fp2YAPOIQtme7CCgaow%2BVz1WtbVpj8Fn1WwTnSc2obECi9bDVyzpW1CVPu5wNbWp5ZctmBCOZWbdTJ%2Ft%2BeeasZDPKBCTWL1IZKXRM78JZxKSf6OD2Eqa4%2BWxAyi6Lz161usl01Ku7sbAr9qgddQaOoHOIt673CnHO2y%2BtzqAEoKEKXGGYhB7bXS6Zosb6rEPcV1abq9lU%2BwzV5lH7Tj4Z0PbNjY5s6dF%2FVylhPp79iV0Ow7QimGICp%2FICEPQ8%2B7nxCtF2IuNiBO5yaps%2FF71bbI20dJzVIAMMw42yLiCQjPFuiF%2FEw0OTUp7bwbUFNwR0K7ETbPVMVOHTQlNjJWg5UNwgQBQZux5Y2it5MaecRGwVlw1fdirFbbjhJ5oGT9wMkMpPJbyNculHmdmZrMXPb%2BdQ78QDJtFDeCJednfcCRz0uRyxXfPpHh7kMLGA3ckGOqUBVjPFQI6ptzOnl1tT9gQ5AIeHzyE65M2enpOTP4eq0wPtUVBWcUWQUBNZfumTWvJNDUvFus68fDKsbpgslHq5DDExrsO6gC%2BGv%2FjX0%2BgxujZR%2F%2BC6gDlENhtnPUXImjWZmxNGRz4k1f8%2B5nvf%2FJMhakiwK6D0tstmv%2BrHxo%2BuMV1dVcNV7hu%2BjI9Y%2BpQDeRg7w7V8FcbI76oKi26ZyDw6a4wVaL4i&X-Amz-Signature=b8e2dc167f56a92db826b35224ad57ba41cedb2257e61e5d85909fc7f89db2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JA4AOIG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJCThYTO7jxZmeEKkKGtnORu8fFIej5TagUjcypWnewIgCAUJmonWLoTQfb%2B%2Bm3%2FFnG6LtHDGqPfStpp7leVGxNkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnPBh84j7gAS7BhwyrcA5iN%2BL9zzocwO543Vcccwxx1Mp2Zn2U7WJTg3EIIfOjGBq855JA%2FMtmeMtDU3DLC4XwMnE8Fi7XdjQRhpxhFl9NhX66cQnesZ77i1MbtDzUpHBzkgd40JHoHeTPHbm2cospqgSC7bZUI%2FsUIg9LP0RNtUZWEfCs8VRvRqdbYnmWfrA7IhF3wGPSCN3Ufl2gEolR%2Fp2YAPOIQtme7CCgaow%2BVz1WtbVpj8Fn1WwTnSc2obECi9bDVyzpW1CVPu5wNbWp5ZctmBCOZWbdTJ%2Ft%2BeeasZDPKBCTWL1IZKXRM78JZxKSf6OD2Eqa4%2BWxAyi6Lz161usl01Ku7sbAr9qgddQaOoHOIt673CnHO2y%2BtzqAEoKEKXGGYhB7bXS6Zosb6rEPcV1abq9lU%2BwzV5lH7Tj4Z0PbNjY5s6dF%2FVylhPp79iV0Ow7QimGICp%2FICEPQ8%2B7nxCtF2IuNiBO5yaps%2FF71bbI20dJzVIAMMw42yLiCQjPFuiF%2FEw0OTUp7bwbUFNwR0K7ETbPVMVOHTQlNjJWg5UNwgQBQZux5Y2it5MaecRGwVlw1fdirFbbjhJ5oGT9wMkMpPJbyNculHmdmZrMXPb%2BdQ78QDJtFDeCJednfcCRz0uRyxXfPpHh7kMLGA3ckGOqUBVjPFQI6ptzOnl1tT9gQ5AIeHzyE65M2enpOTP4eq0wPtUVBWcUWQUBNZfumTWvJNDUvFus68fDKsbpgslHq5DDExrsO6gC%2BGv%2FjX0%2BgxujZR%2F%2BC6gDlENhtnPUXImjWZmxNGRz4k1f8%2B5nvf%2FJMhakiwK6D0tstmv%2BrHxo%2BuMV1dVcNV7hu%2BjI9Y%2BpQDeRg7w7V8FcbI76oKi26ZyDw6a4wVaL4i&X-Amz-Signature=15b9a390506fe1b3bfd0d9192f8b2a945eeb385ae9f2acb7a2c554da1b95e728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

