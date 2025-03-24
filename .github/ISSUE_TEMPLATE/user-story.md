---
name: User Story
about: This template define user story
title: ''
labels: backlog, bug, documentation, duplicate, enhancement, good first issue, help
  wanted, icebox, question, wontfix
assignees: Manolo, Juan, Pepe. Federeico, Esteban
---

**As a** [role]  
**I need** [function]  
**So that** [benefit]

### Details and Assumptions
* [document what you know]

### Acceptance Criteria
```gherkin
Given [some context]  
When [certain action is taken]  
Then [the outcome of action is observed]

---


---

### ✅ Historia 1

```md
---
name: Cambio de contraseña
about: Historia para permitir que los usuarios cambien su contraseña
title: ''
labels: backlog
assignees: ''
---

**As a** usuario registrado  
**I need** cambiar mi contraseña desde el perfil  
**So that** pueda mantener mi cuenta segura

### Details and Assumptions
* Debe introducir la contraseña actual para confirmar el cambio.

### Acceptance Criteria
```gherkin
Given que el usuario accede a su perfil  
When actualiza su contraseña con una válida  
Then la nueva contraseña se guarda y se confirma el cambio



---

### ✅ Historia 2

```md
---
name: Refactorización del login
about: Eliminar funciones obsoletas del módulo de login
title: ''
labels: deuda técnica
assignees: ''
---

**As a** desarrollador  
**I need** eliminar funciones obsoletas del módulo de login  
**So that** se reduzca la complejidad del código

### Details and Assumptions
* Las funciones afectadas no son llamadas desde ningún componente.

### Acceptance Criteria
```gherkin
Given el código del módulo de login  
When elimino las funciones no utilizadas  
Then la aplicación sigue funcionando sin errores



---

### ✅ Historia 3

```md
---
name: Panel de métricas
about: Crear un panel para visualizar métricas del sistema
title: ''
labels: nevera
assignees: ''
---

**As a** administrador  
**I need** un panel de métricas del sistema  
**So that** pueda analizar el rendimiento y uso de recursos

### Details and Assumptions
* Se usará Grafana o una solución similar para visualizar métricas.

### Acceptance Criteria
```gherkin
Given que accedo al panel de métricas  
When selecciono un período de tiempo  
Then veo gráficos actualizados del rendimiento del sistema



---

### ✅ Historia 4

```md
---
name: Notificaciones por correo
about: Notificar a los usuarios por email de eventos importantes
title: ''
labels: nueva
assignees: ''
---

**As a** usuario  
**I need** recibir notificaciones por correo  
**So that** esté informado sobre actualizaciones importantes

### Details and Assumptions
* Las notificaciones se enviarán al email registrado en el perfil.

### Acceptance Criteria
```gherkin
Given una actualización importante del sistema  
When ocurre un cambio relevante  
Then el usuario recibe un email notificándolo



---

### ✅ Historia 5

```md
---
name: Notificaciones por correo
about: Notificar a los usuarios por email de eventos importantes
title: ''
labels: nueva
assignees: ''
---

**As a** usuario  
**I need** recibir notificaciones por correo  
**So that** esté informado sobre actualizaciones importantes

### Details and Assumptions
* Las notificaciones se enviarán al email registrado en el perfil.

### Acceptance Criteria
```gherkin
Given una actualización importante del sistema  
When ocurre un cambio relevante  
Then el usuario recibe un email notificándolo



---

### ✅ Historia 6

```md
---
name: Búsqueda de contenido
about: Añadir funcionalidad de búsqueda en la aplicación
title: ''
labels: backlog
assignees: ''
---

**As a** usuario  
**I need** buscar contenido en la aplicación  
**So that** pueda encontrar rápidamente lo que necesito

### Details and Assumptions
* La búsqueda debe ser insensible a mayúsculas/minúsculas.

### Acceptance Criteria
```gherkin
Given que accedo a la barra de búsqueda  
When ingreso un término válido  
Then se muestran los resultados correspondientes



---

### ✅ Historia 7

```md
---
name: Actualización de dependencias
about: Actualizar las librerías del proyecto
title: ''
labels: deuda técnica
assignees: ''
---

**As a** desarrollador  
**I need** actualizar las dependencias del proyecto  
**So that** podamos mantener la seguridad del sistema

### Details and Assumptions
* Deben probarse todos los tests después de la actualización.

### Acceptance Criteria
```gherkin
Given que actualizo las dependencias  
When ejecuto los tests  
Then todos pasan correctamente y el sistema funciona igual



---

### ✅ Historia 8

```md
---
name: Exportar datos en Excel
about: Permitir exportar reportes de usuarios en Excel
title: ''
labels: nevera
assignees: ''
---

**As a** analista  
**I need** exportar reportes de usuarios en Excel  
**So that** pueda analizarlos en otras herramientas

### Details and Assumptions
* El archivo debe incluir nombre, correo y fecha de registro.

### Acceptance Criteria
```gherkin
Given que estoy en la sección de usuarios  
When pulso el botón de "Exportar"  
Then se genera y descarga un archivo Excel con los datos





