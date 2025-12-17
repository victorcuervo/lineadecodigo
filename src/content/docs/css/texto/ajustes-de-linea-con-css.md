---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2DXBGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBL%2Blm4Fl4KUzJNaw1UZgf1r0ogHrxiVfLXWqMRGHPAIgYmDEy5IPxyoZtGoGFqOjafL8ZcnS2ak6Ab7%2Bj6lnFhYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK%2BpbepiWuSWAWC8wCrcA6wu69DsL6uM4AqDuBhixZ4%2F0wKQ3sMNmIQxeZTVUKNqT1G8SgWB4U8nygelNhAf%2FnObXCNEEpmz2N47b0gpGRn2S7GI1PIu%2FGGPK%2FlCfsDcgUef%2BSA0QDYxiZCtpVdvhcFjsINXlKVn65lc6biXxc%2BPHCwLQPzd16l8eTOlCrzTkzK1uShtM%2Bu3cVvfGyv2srbncec%2BrUgYbia0Wsl9eDeJku59d9V9ZtjnsJ7U88lVZ3I7Wv3H7XBOBr%2BZYQgeR9Df%2FQ6WW%2BHSh%2FVRLvwDTqh3ZG7w1CMuU45k99LpVesX7k1xZvn03bsEeMOIsinQgvgMeMkhP%2F3bECTK%2B4c2vkW7NIPaV1g6bVbwCyAU%2BGD%2BlLhu7xklUHiJscRuLos7YgoUHrSR6oeQ2R7E8nRtiiky1%2FmaP7AV4oNxDRS6W65Z547%2FuxvXVZYG58hfh6ib1LXnEFXHdElSzx7oCuMEAHrXFI%2BhH1JByyFTUXp3OAe6LHUHuvtZBRqXd36PLHJSgtMeCK0554cdw%2FCEJVyVg%2BgHOdtagz81VzGpZipMAjrv0IUdZZ75wh3D%2Fo8yY3DYmwiw3Suh1PwHpPNa9f3CwR2sZWXAx84y5Ue1SDKWM%2Fr3pqcJ24JXZpKKVaXcMI%2FPiMoGOqUB8a%2BY7fyZPJYwvS9C55Xm%2FT7Rg2ucrvitNu%2FzGbTqivVFn0EJuRGA3zFtEH9%2FBaTRHCrASYje98XLqNcXuD4JMaasJv7Sd2zKePeOrFbVPFTQJFvZkwSHAYsla%2FSjvhcz%2FPI3v%2FA1tgTPUcWP3ADRJ1Irx4J0p32kgwxSgc590bMrmyNn%2FMzywX9D6DpW4Ei8UHruPv6I8sH%2BhrBLCSO7DPcmPr%2Bm&X-Amz-Signature=a2dd20a42b7bc97e316b5a4975edfb032b79376d3b27a680f84f28105cebf89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2DXBGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBL%2Blm4Fl4KUzJNaw1UZgf1r0ogHrxiVfLXWqMRGHPAIgYmDEy5IPxyoZtGoGFqOjafL8ZcnS2ak6Ab7%2Bj6lnFhYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK%2BpbepiWuSWAWC8wCrcA6wu69DsL6uM4AqDuBhixZ4%2F0wKQ3sMNmIQxeZTVUKNqT1G8SgWB4U8nygelNhAf%2FnObXCNEEpmz2N47b0gpGRn2S7GI1PIu%2FGGPK%2FlCfsDcgUef%2BSA0QDYxiZCtpVdvhcFjsINXlKVn65lc6biXxc%2BPHCwLQPzd16l8eTOlCrzTkzK1uShtM%2Bu3cVvfGyv2srbncec%2BrUgYbia0Wsl9eDeJku59d9V9ZtjnsJ7U88lVZ3I7Wv3H7XBOBr%2BZYQgeR9Df%2FQ6WW%2BHSh%2FVRLvwDTqh3ZG7w1CMuU45k99LpVesX7k1xZvn03bsEeMOIsinQgvgMeMkhP%2F3bECTK%2B4c2vkW7NIPaV1g6bVbwCyAU%2BGD%2BlLhu7xklUHiJscRuLos7YgoUHrSR6oeQ2R7E8nRtiiky1%2FmaP7AV4oNxDRS6W65Z547%2FuxvXVZYG58hfh6ib1LXnEFXHdElSzx7oCuMEAHrXFI%2BhH1JByyFTUXp3OAe6LHUHuvtZBRqXd36PLHJSgtMeCK0554cdw%2FCEJVyVg%2BgHOdtagz81VzGpZipMAjrv0IUdZZ75wh3D%2Fo8yY3DYmwiw3Suh1PwHpPNa9f3CwR2sZWXAx84y5Ue1SDKWM%2Fr3pqcJ24JXZpKKVaXcMI%2FPiMoGOqUB8a%2BY7fyZPJYwvS9C55Xm%2FT7Rg2ucrvitNu%2FzGbTqivVFn0EJuRGA3zFtEH9%2FBaTRHCrASYje98XLqNcXuD4JMaasJv7Sd2zKePeOrFbVPFTQJFvZkwSHAYsla%2FSjvhcz%2FPI3v%2FA1tgTPUcWP3ADRJ1Irx4J0p32kgwxSgc590bMrmyNn%2FMzywX9D6DpW4Ei8UHruPv6I8sH%2BhrBLCSO7DPcmPr%2Bm&X-Amz-Signature=d47ffa98a232de78311b2b42208519ab3c2e0b52983ff26093a7d0d5a6e67922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

