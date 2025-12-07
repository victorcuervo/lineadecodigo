---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MMG2T5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfLSt4geYaFf70lrEiXxq6Lpi5krz0qsOAjd%2FFURTqLAiEAmfVgDWJf2MdaS3%2BsUkmsARwKh2imzEuyfMWZL%2B4WL90qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnArH0EC41ochdMHSrcA27nK4ym%2ByC1DFihqU8EpyZC0qxLNsvUqUrsqQ85X6ymMdShjW6dfISbwnoTZlvHr9zvkuSFVp4CVsm7q%2FOWCCKtUcc6k6Txj0l%2BIwXopfutjVixteyEwBAoOEPmXCVsTapXWa2x4Cdc14iYjFiIxeWjpz96Tbfv1uoKUUTccR3yh5H0oJKXNW2bgHSZUHPif49fStmkpNjM6ZPKbsmif2uMe%2FWc6CDvEhwuNSKxKQKvfYPhk5xJr2GdaowGbMPQNHHIZpHlbXKa89YGZHAG7Yotps8Q0T1RWi9l6ti9uEvuH8iCfGzycrUk417Gz9BXNd%2B2CjLEtsAmSpgpDZ73e9bvudA7aQ9k2iY7rz4WobokT24aCnR448JgrrQntq0L4Pl56n4k53S4BSx5%2F8h1GCBqISr%2FEOOKBASB1yt3rwzFpyZAUra%2BPsCZgEywGWdXJdR%2Bz06h61cEyGY7au2yxlEG%2BJV9oLJw5qEo2VR1sInU1Poo7sx%2Bxp8NILaZ0WljTHFpVrj0ak4zvxeuGTRqNpgIDzFBCR7%2BOFqMAeJIfwBmg9BxclKuEWvQpaffkaOibDII1GQxvLnp9dtzcJpqnPDKB1kNHLpPCAUWKmue4DzWOk4pscBe7c7oEhigMNeg1MkGOqUB9W7X8Qv2cIS82FLKN76Ha4E72NBpJ1SX8EqhlltVcAsck2YGuh7Gq4oQYX%2Bq%2B0bXjYlYUlUQIyskXQkmm05Ll0A7T8P1AAC0RfSwHK%2FzvcXZ7pTDDPVMeWdZrgrkjwhWkCCyEZiYjgJqSjbSOpL1hSdLzJDGINd7pTnI%2BJAAbwu%2BiA%2Fa3aY%2FOZyvQ8sJnx6JFN4HFcjUlm%2FZtD4zMVDlM38cI7ne&X-Amz-Signature=9fb0bfee859737c1c1ff08f232cbe136433a81e37b2a9a85994379e63c99eb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MMG2T5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfLSt4geYaFf70lrEiXxq6Lpi5krz0qsOAjd%2FFURTqLAiEAmfVgDWJf2MdaS3%2BsUkmsARwKh2imzEuyfMWZL%2B4WL90qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnArH0EC41ochdMHSrcA27nK4ym%2ByC1DFihqU8EpyZC0qxLNsvUqUrsqQ85X6ymMdShjW6dfISbwnoTZlvHr9zvkuSFVp4CVsm7q%2FOWCCKtUcc6k6Txj0l%2BIwXopfutjVixteyEwBAoOEPmXCVsTapXWa2x4Cdc14iYjFiIxeWjpz96Tbfv1uoKUUTccR3yh5H0oJKXNW2bgHSZUHPif49fStmkpNjM6ZPKbsmif2uMe%2FWc6CDvEhwuNSKxKQKvfYPhk5xJr2GdaowGbMPQNHHIZpHlbXKa89YGZHAG7Yotps8Q0T1RWi9l6ti9uEvuH8iCfGzycrUk417Gz9BXNd%2B2CjLEtsAmSpgpDZ73e9bvudA7aQ9k2iY7rz4WobokT24aCnR448JgrrQntq0L4Pl56n4k53S4BSx5%2F8h1GCBqISr%2FEOOKBASB1yt3rwzFpyZAUra%2BPsCZgEywGWdXJdR%2Bz06h61cEyGY7au2yxlEG%2BJV9oLJw5qEo2VR1sInU1Poo7sx%2Bxp8NILaZ0WljTHFpVrj0ak4zvxeuGTRqNpgIDzFBCR7%2BOFqMAeJIfwBmg9BxclKuEWvQpaffkaOibDII1GQxvLnp9dtzcJpqnPDKB1kNHLpPCAUWKmue4DzWOk4pscBe7c7oEhigMNeg1MkGOqUB9W7X8Qv2cIS82FLKN76Ha4E72NBpJ1SX8EqhlltVcAsck2YGuh7Gq4oQYX%2Bq%2B0bXjYlYUlUQIyskXQkmm05Ll0A7T8P1AAC0RfSwHK%2FzvcXZ7pTDDPVMeWdZrgrkjwhWkCCyEZiYjgJqSjbSOpL1hSdLzJDGINd7pTnI%2BJAAbwu%2BiA%2Fa3aY%2FOZyvQ8sJnx6JFN4HFcjUlm%2FZtD4zMVDlM38cI7ne&X-Amz-Signature=db2ad28ea6625d93e6d603fe8cae1371686cbcd2b8f435bf82f04d828cece864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

