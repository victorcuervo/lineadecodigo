---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BG4AFW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxUHKMR1MwKewRA%2FR7SFSYl3uxiyPYklwysFrlclIbTAIgLbzqqj6ElTGXY6ieSHGw4JhPx7ejlmEZPUq%2BeYTLoyMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJoljvNK4UNDJ0CzfircA4%2BmRy4%2Fg3c1OGuxHK9UDUSrrbzPKmzAWvTan2fT20EINiMP6x%2FccKIg1AD3hMhBeCIO1J5CZJ1sFO%2Bd4Gujzjykr4BmSak0%2BZv3g%2BUnU7UbP8k0SVkMOXPv6vwY846txyyRRNxMS97719w2luIXkzX44dbOhNKHYYigcQlNED0eW9NsSRjkA8if5K09JAcyaxOxYsURDrsbKYbn5O9u2MYmzrEegMMITuG%2F70krijrNtUskyvILOEmlcw6fi7DbquOaEQe%2BckFVFOyFCeEOLls3UMNUKuniQQOobc%2BRXAhavOFYl7mIiSym5vA6r4u5T5zshR8iQK5hGW9uJH9aoiIv%2FHT7SQg7KIt47bVEW8TnllCEFEWGdwSOIDXn%2BOPLygzE7xqLdslNg9FyBhcsh%2B4uw8QxeOV%2FClMwagENO37v9gwgmmgKem6wlwd84WiAVMzNXxApu0AHAiaKu0tnfdoLLxVPzDAO95Lmwd1wUVW8zXHmBLvw%2BTzifWLRK%2F9Je8rLbthGlOhU2ii6FMDWPuGxwPYw%2B8OsgL26LL8m1MdYS1p01gJTKn%2BmwZqQ29UxQ%2FKeamRMQUZ958cH5bZAm7JJtLycaU8Id79co8TYRCp3XO3mfPLf5HLqkNFzMPmJzckGOqUBafeeKxCHKUfLwmWUia%2FxoD95p9nWH23K9ybt6En3SIF7HvwIgm%2BnxPaaV7UBHUbVkqpoSkfw0%2FvZ77PrpEaFzI2pSbFrY9%2Fnc3TZqvSDGn5P6OJkKsR4aMVWazkY8mcMgyZFMIFfUKog%2Btc%2BuYn13fC8irXkUuFd9tzj00JlXrOcwuqIWDjQdFKlgl%2FuG%2BhxOIkVfVPgqfbkbK0NEdrVfoPWCpVo&X-Amz-Signature=322410bd7bfb1ac44ffed2a113ecd47aa8d321fdbc34a2f5be36789878505e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BG4AFW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxUHKMR1MwKewRA%2FR7SFSYl3uxiyPYklwysFrlclIbTAIgLbzqqj6ElTGXY6ieSHGw4JhPx7ejlmEZPUq%2BeYTLoyMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJoljvNK4UNDJ0CzfircA4%2BmRy4%2Fg3c1OGuxHK9UDUSrrbzPKmzAWvTan2fT20EINiMP6x%2FccKIg1AD3hMhBeCIO1J5CZJ1sFO%2Bd4Gujzjykr4BmSak0%2BZv3g%2BUnU7UbP8k0SVkMOXPv6vwY846txyyRRNxMS97719w2luIXkzX44dbOhNKHYYigcQlNED0eW9NsSRjkA8if5K09JAcyaxOxYsURDrsbKYbn5O9u2MYmzrEegMMITuG%2F70krijrNtUskyvILOEmlcw6fi7DbquOaEQe%2BckFVFOyFCeEOLls3UMNUKuniQQOobc%2BRXAhavOFYl7mIiSym5vA6r4u5T5zshR8iQK5hGW9uJH9aoiIv%2FHT7SQg7KIt47bVEW8TnllCEFEWGdwSOIDXn%2BOPLygzE7xqLdslNg9FyBhcsh%2B4uw8QxeOV%2FClMwagENO37v9gwgmmgKem6wlwd84WiAVMzNXxApu0AHAiaKu0tnfdoLLxVPzDAO95Lmwd1wUVW8zXHmBLvw%2BTzifWLRK%2F9Je8rLbthGlOhU2ii6FMDWPuGxwPYw%2B8OsgL26LL8m1MdYS1p01gJTKn%2BmwZqQ29UxQ%2FKeamRMQUZ958cH5bZAm7JJtLycaU8Id79co8TYRCp3XO3mfPLf5HLqkNFzMPmJzckGOqUBafeeKxCHKUfLwmWUia%2FxoD95p9nWH23K9ybt6En3SIF7HvwIgm%2BnxPaaV7UBHUbVkqpoSkfw0%2FvZ77PrpEaFzI2pSbFrY9%2Fnc3TZqvSDGn5P6OJkKsR4aMVWazkY8mcMgyZFMIFfUKog%2Btc%2BuYn13fC8irXkUuFd9tzj00JlXrOcwuqIWDjQdFKlgl%2FuG%2BhxOIkVfVPgqfbkbK0NEdrVfoPWCpVo&X-Amz-Signature=ac4358661751a81da365e394c11469e19e65d54f01ef3052a64d655c8e906fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

